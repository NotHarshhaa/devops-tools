import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "DevOps Arsenal - Ultimate DevOps Toolkit",
  description:
    "A comprehensive collection of essential DevOps tools for development, deployment, monitoring, automation, security, and more. Whether you're a beginner exploring DevOps or a seasoned engineer looking for the best tools, this site has everything you need!",
  keywords:
    "DevOps, tools, automation, CI/CD, monitoring, infrastructure, containerization, kubernetes",
  authors: [{ name: "Harshha Reddy" }],
  openGraph: {
    title: "DevOps Arsenal - Ultimate DevOps Toolkit",
    description:
      "A comprehensive collection of essential DevOps tools for development, deployment, monitoring, automation, security, and more. Whether you're a beginner exploring DevOps or a seasoned engineer looking for the best tools, this site has everything you need!",
    images: [{ url: "https://imgur.com/74NDd2v.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Arsenal - Ultimate DevOps Toolkit",
    description:
      "A comprehensive collection of essential DevOps tools for development, deployment, monitoring, automation, security, and more. Whether you're a beginner exploring DevOps or a seasoned engineer looking for the best tools, this site has everything you need!",
    images: ["https://imgur.com/74NDd2v.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Standard Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/small-favicon.svg"
          type="image/svg+xml"
          sizes="16x16"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
      </head>
      <ThemeProvider>
        <body className="font-sans relative">
          <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(156,163,175,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.4)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(75,85,99,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.5)_1px,transparent_1px)]"></div>
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
          <Navbar />
          <main className="min-h-screen pb-24 relative z-10 overflow-visible">
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
