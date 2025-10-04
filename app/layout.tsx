import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

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
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
