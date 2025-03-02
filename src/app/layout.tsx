import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import TerminalNav from "@/components/TerminalNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gnana Siva Sai Varadaraju | Portfolio",
  description: "Full Stack Developer and DevOps Engineer with expertise in Kubernetes, AWS, and CI/CD pipelines",
  keywords: ["Full Stack Developer", "DevOps Engineer", "Kubernetes", "AWS", "CI/CD", "Go", "React", "Next.js"],
  authors: [{ name: "Gnana Siva Sai Varadaraju" }],
  creator: "Gnana Siva Sai Varadaraju",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-foreground relative overflow-x-hidden`}
      >
        {/* Add some terminal style background grid */}
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-[length:50px_50px] opacity-[0.03] pointer-events-none z-0"></div>
        
        {/* Matrix rain effect - more visible now */}
        <div className="matrix-rain"></div>
        
        {/* Scanline effect */}
        <div className="scanline"></div>
        
        {/* Terminal window border glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00ff00]/[0.03] via-transparent to-[#00ff00]/[0.03]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/[0.03] via-transparent to-[#00ff00]/[0.03]"></div>
        </div>
        
        {/* Add connector nodes at each corner */}
        <div className="fixed top-0 left-0 connector-node node-pulse"></div>
        <div className="fixed top-0 right-0 connector-node node-pulse"></div>
        <div className="fixed bottom-0 left-0 connector-node node-pulse"></div>
        <div className="fixed bottom-0 right-0 connector-node node-pulse"></div>
        
        {/* Connecting lines for the frame */}
        <div className="fixed top-0 left-5 right-5 h-[2px] bg-[#00ff00] opacity-30 shadow-[0_0_10px_#00ff00]"></div>
        <div className="fixed bottom-0 left-5 right-5 h-[2px] bg-[#00ff00] opacity-30 shadow-[0_0_10px_#00ff00]"></div>
        <div className="fixed left-0 top-5 bottom-5 w-[2px] bg-[#00ff00] opacity-30 shadow-[0_0_10px_#00ff00]"></div>
        <div className="fixed right-0 top-5 bottom-5 w-[2px] bg-[#00ff00] opacity-30 shadow-[0_0_10px_#00ff00]"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          <TerminalNav />
          <main className="pt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
