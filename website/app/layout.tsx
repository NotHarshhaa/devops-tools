import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DevOps Arsenal - Ultimate DevOps Toolkit",
    template: "%s | DevOps Arsenal",
  },
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
      "A comprehensive collection of essential DevOps tools for development, deployment, monitoring, automation, security, and more.",
    images: ["https://imgur.com/74NDd2v.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#7f5af0",
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before first paint so the correct theme class is on <html>
 * immediately - prevents a flash of the wrong theme (FOUC).
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans relative`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(156,163,175,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.4)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(75,85,99,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.5)_1px,transparent_1px)]"></div>
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
          <Navbar />
          <main className="min-h-screen pb-24 relative z-10 overflow-visible">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
