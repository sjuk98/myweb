import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shijuuk.space"),
  title: "Shiju UK | Senior Full Stack Developer & Solutions Architect",
  description: "Portfolio of Shiju UK, a Senior Full Stack Developer specializing in Next.js, React, Node.js, Cloud Infrastructure, and scalable enterprise web solutions.",
  keywords: [
    "Senior Full Stack Developer",
    "Solutions Architect",
    "Next.js Developer",
    "React Expert",
    "Node.js",
    "Express.js",
    "Node.js Architect",
    "Django Developer",
    "Cloud Infrastructure Engineer",
    "API Development Specialist",
    "Software Engineer Portfolio",
    "Shiju UK",
    "Sj98",
    "shijuuk.space",
    "Web Application Developer",
    "Enterprise Solutions Architect"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shiju UK | Senior Full Stack Developer & Solutions Architect",
    description: "Explore the professional portfolio of Shiju UK, building scalable, high-performance, and secure digital architectures.",
    url: "https://shijuuk.space",
    siteName: "Shiju UK Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiju UK | Senior Full Stack Developer",
    description: "Explore the professional portfolio of Shiju UK, building scalable, high-performance, and secure digital architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
