import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Host_Grotesk, Atkinson_Hyperlegible_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  display: "swap",
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-mono",
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#17181c" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f5" },
  ],
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
        className={`${hostGrotesk.variable} ${atkinsonMono.variable} font-body bg-paper text-ink`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
