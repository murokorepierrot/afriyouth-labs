import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; 

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "AfriYouth Innovation Labs | Next-Gen Tech",
  description: "Empowering African youth through modern engineering skillsets, professional frameworks, and acceleration structures to build scalable global solutions.",
  keywords: ["AfriYouth", "Innovation Labs", "Africa Tech", "Coding", "UI/UX", "Kigali", "Rwanda", "Software Engineering"],
  authors: [{ name: "Murokore Pierrot" }],
  creator: "Murokore Pierrot",
  openGraph: {
    title: "AfriYouth Innovation Labs",
    description: "Shaping Africa's Digital Frontier with Next-Gen Tech.",
    url: "https://afriyouth-labs.com",
    siteName: "AfriYouth Innovation Labs",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "AfriYouth Innovation Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriYouth Innovation Labs",
    description: "Shaping Africa's Digital Frontier with Next-Gen Tech.",
    images: ["https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#030712]`}>
        {children}
      </body>
    </html>
  );
}
