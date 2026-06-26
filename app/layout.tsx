import type { Metadata } from "next";
import "@fontsource-variable/anybody/wdth.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import "./pitch-v2.css";
import "./final-polish.css";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.browserTitle,
  description: siteContent.metaDescription,
  applicationName: "STILL HERE",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: siteContent.browserTitle,
    description: siteContent.metaDescription,
    type: "website",
    siteName: "STILL HERE"
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.browserTitle,
    description: siteContent.metaDescription
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
