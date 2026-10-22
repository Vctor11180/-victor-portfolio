import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const title = `${profile.name} — Systems Engineer & Web3 Architect`;
const description =
  "Full Stack Tech Lead bridging distributed Web2 systems and Web3 protocols. Hackathon builder on Ethereum, Avalanche, Stellar and Solana.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title,
  description,
  keywords: [
    "Web3 Developer", "Solidity", "Soroban", "Solana", "Avalanche", "Stellar",
    "Next.js", "Full Stack Engineer", "Tech Lead", "Bolivia", "LATAM", "DeFi", "Hackathon",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: { title, description, type: "website", url: profile.site },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrains.variable}`}>
      <body>
        <div className="ambient" aria-hidden />
        {children}
      </body>
    </html>
  );
}
