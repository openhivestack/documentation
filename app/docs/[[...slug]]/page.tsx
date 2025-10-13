import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { createCompiler } from "@fumadocs/mdx-remote";
import { createElement } from "react";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

const REPOS = {
  "cli/overview": {
    owner: "openhivestack",
    repo: "cli",
    frontmatter: {
      title: "Overview",
      description: "Official OpenHive CLI for creating multi-agent clusters",
    },
    transform: (content: string) => {
      let newContent = content.replace(
        /!\[H\.I\.V\.E\. CLI Logo\].*?text=H\.I\.V\.E\.\+CLI\)/,
        ""
      );
      newContent = newContent.replace(
        /\[!\[Version\].*?logoColor=white\)\]\(https:\/\/www.typescriptlang.org\/\)/s,
        ""
      );
      newContent = newContent
        .replace(/<div align="center">/g, "")
        .replace(/<\/div>/g, "");
      return newContent;
    },
  },
  "sdks/node/overview": {
    owner: "openhivestack",
    repo: "node-sdk",
    frontmatter: {
      title: "Overview",
      description:
        "Official TypeScript/JavaScript SDK for the H.I.V.E. Protocol",
    },
    transform: (content: string) => {
      return content.replace(/# Openhive \(node-sdk\)/, "");
    },
  },
  "sdks/python/overview": {
    owner: "openhivestack",
    repo: "python-sdk",
    frontmatter: {
      title: "Overview",
      description:
        "The official core library for building agents on the H.I.V.E. Protocol in Python.",
    },
    transform: (content: string) => {
      return content.replace(/# OpenHive \(Python SDK\)/, "");
    },
  },
};

export async function generateStaticParams() {
  const pages = source.generateParams();
  const dynamicSlugs = Object.keys(REPOS);

  // Filter out the pages that should be dynamic
  return pages.filter((page) => {
    const slug = page.slug?.join("/") ?? "";
    return !dynamicSlugs.includes(slug);
  });
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await paramsPromise;
  const slug = params.slug?.join("/") ?? "";
  const repoConfig = REPOS[slug as keyof typeof REPOS];
  if (repoConfig) {
    return {
      title: repoConfig.frontmatter.title,
      description: repoConfig.frontmatter.description,
    };
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

async function getLatestReleaseTag(owner: string, repo: string) {
  try {
    const response = await octokit.repos.getLatestRelease({
      owner,
      repo,
    });

    if (response.data.tag_name) {
      return response.data.tag_name;
    } else {
      console.warn(
        `No tag_name found for latest release of ${owner}/${repo}. Falling back to main branch.`
      );
      return "main";
    }
  } catch (error) {
    console.warn(
      `Error fetching latest release tag for ${owner}/${repo}. Falling back to main branch.`,
      error
    );
    return "main";
  }
}

async function getReadmeContent(
  owner: string,
  repo: string,
  branchOrTag: string
) {
  try {
    const { data } = await octokit.repos.getReadme({
      owner: owner,
      repo: repo,
      ref: branchOrTag,
    });

    // The content is base64 encoded, so you need to decode it
    const decodedContent = Buffer.from(data.content, "base64").toString("utf8");
    return decodedContent;
  } catch (error) {
    console.error("Error fetching README:", error);
    throw error;
  }
}

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const slug = params.slug?.join("/") ?? "";
  const repoConfig = REPOS[slug as keyof typeof REPOS];

  if (repoConfig) {
    const { owner, repo, frontmatter, transform } = repoConfig;
    const branchOrTag = await getLatestReleaseTag(owner, repo);
    const readme = await getReadmeContent(owner, repo, branchOrTag);

    let content = "Not Found";
    try {
      if (readme) {
        content = readme;
        if (transform) {
          content = transform(readme);
        }
      }
    } catch (e) {
      console.error(e);
    }

    const { body } = await createCompiler().compile({
      source: content,
      components: getMDXComponents(),
    });

    return (
      <DocsPage toc={[]} full={false}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription>{frontmatter.description}</DocsDescription>
        <DocsBody>{createElement(body)}</DocsBody>
      </DocsPage>
    );
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            p: (props) => <p className="text-fd-muted-foreground" {...props} />,
            li: (props) => (
              <li className="text-fd-muted-foreground" {...props} />
            ),
            code: (props) => <code {...props} className="text-cyan-500" />,
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}
