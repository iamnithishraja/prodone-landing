import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prodone | AI-Powered Product Development Agency",
  description: "Build AI-powered apps, custom agents, and full-stack products. From startups to enterprises, we bring your vision to life with cutting-edge AI technology.",
  keywords: ["AI development", "product agency", "AI agents", "web development", "startup development", "enterprise solutions"],
  openGraph: {
    title: "Prodone | AI-Powered Product Development Agency",
    description: "Build AI-powered apps, custom agents, and full-stack products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
