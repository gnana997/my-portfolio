import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gnana.dev"),
  title: "Gnana Siva Sai | Senior Software Engineer",
  description: "Software Engineer specializing in distributed systems, Kubernetes, and AI-powered developer tools. 6+ years experience building high-performance systems processing 100K+ logs/second. CKA certified.",
  keywords: ["Software Engineer", "Distributed Systems", "Kubernetes", "AWS", "Go", "TypeScript", "MCP", "AI Developer Tools", "Platform Engineering"],
  authors: [{ name: "V Gnana Siva Sai" }],
  creator: "V Gnana Siva Sai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gnana.dev",
    siteName: "Gnana Siva Sai - Portfolio",
    title: "Gnana Siva Sai | Senior Software Engineer",
    description: "Software Engineer specializing in distributed systems, Kubernetes, and AI-powered developer tools. 6+ years experience. CKA certified.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gnana Siva Sai - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnana Siva Sai | Senior Software Engineer",
    description: "Software Engineer specializing in distributed systems, Kubernetes, and AI-powered developer tools.",
    creator: "@GnanaVaradaraju",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-[#EDEDED]`}
      >
        {/* Grain texture overlay */}
        <div className="grain-overlay" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
