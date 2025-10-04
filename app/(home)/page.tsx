import Link from "next/link";
import { HexagonIcon } from "lucide-react";
import DiscordIcon from "@/components/social/discord-icon.png";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "H.I.V.E. Protocol",
  description:
    "Simple AI agent collaboration & discovery protocol designed for scale and multi-agent systems",
  keywords: [
    "H.I.V.E. Protocol",
    "AI agent collaboration",
    "Simple Agent Collaboration Protocol",
    "Multi-agent systems",
    "AI agent collaboration and discovery protocol",
    "AI agent collaboration protocol for multi-agent systems",
  ],
  openGraph: {
    title: "H.I.V.E. Protocol",
    description:
      "Simple AI agent collaboration & discovery protocol designed for scale and multi-agent systems",
    type: "website",
    url: "https://openhive.sh",
    siteName: "H.I.V.E. Protocol",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "H.I.V.E. Protocol",
    description:
      "Simple AI agent collaboration & discovery protocol designed for scale and multi-agent systems",
  },
  alternates: {
    canonical: "https://openhive.sh",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://openhive.sh"),
  creator: "OpenHive",
  publisher: "OpenHive",
  authors: [{ name: "OpenHive", url: "https://openhive.sh" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center w-1/3 mx-auto gap-8">
      <div className="flex flex-col items-center gap-4 justify-center">
        <HexagonIcon className="text-cyan-500" />
        <div className="text-2xl font-bold">H.I.V.E</div>
        <div className="text-4xl font-bold">Protocol</div>
      </div>
      <div className="text-justify flex flex-col gap-2 text-fd-muted-foreground">
        <div className="">
          The landscape of Artificial Intelligence is rapidly evolving from
          isolated, specialized models to complex ecosystems of autonomous
          agents. These agents—whether performing data analysis, managing
          logistics, automating services, or participating in decentralized
          economies—increasingly need to interact with each other. This
          inter-agent communication presents significant challenges across
          various dimensions:
        </div>
        <ul className="list-disc list-inside pl-4 text-sm">
          <li>
            <span className="font-bold text-cyan-500">Discovery</span>: How do
            agents find one another?
          </li>
          <li>
            <span className="font-bold text-cyan-500">Authorization</span>: How
            do they establish trust, agree on terms, and execute tasks reliably?
          </li>
          <li>
            <span className="font-bold text-cyan-500">Value</span>: How can they
            ensure verified delivery of results?
          </li>
        </ul>
      </div>
      <p className="text-justify p-4 border border-purple-500/60 rounded-lg text-fd-muted-foreground">
        The H.I.V.E. Protocol addresses these fundamental challenges of{" "}
        <span className="font-bold">Discovery</span>,{" "}
        <span className="font-bold">Authorization</span>, and{" "}
        <span className="font-bold">Execution</span> by providing a simple,
        secure, and easy to implement framework for{" "}
        <span className="">
          <span className="text-cyan-500 font-bold text-lg pr-0.5">H</span>ybrid{" "}
          <span className="text-cyan-500 font-bold text-lg pr-0.5">I</span>
          nter-Agent{" "}
          <span className="text-cyan-500 font-bold text-lg pr-0.5">V</span>
          erification &{" "}
          <span className="text-cyan-500 font-bold text-lg pr-0.5">E</span>
          xecution
        </span>
        . It serves as the foundational standard for seamless interactions
        between agents (A2A) and within multi-agent systems (MAS).
      </p>
      <p className="text-fd-muted-foreground">
        Visit our{" "}
        <Link
          href="/docs/protocol/introduction"
          className="text-fd-foreground font-semibold underline"
        >
          documentation
        </Link>{" "}
        for more details.
      </p>
      <div className="text-fd-muted-foreground flex gap-4">
        <Link
          href="https://discord.gg/y4K8V7NzFD"
          className="text-fd-foreground font-semibold underline"
          target="_blank"
        >
          <Image
            src={DiscordIcon}
            alt="Discord"
            width={24}
            height={24}
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
      </div>
    </main>
  );
}
