import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumar Kartikey | Senior Frontend Architect & UI Expert",
  description:
    "Portfolio of Kumar Kartikey — Senior Frontend Architect with 7+ years of experience engineering scalable AI-powered SaaS, React, Next.js, and React Native applications.",
  keywords: [
    "Kumar Kartikey",
    "Frontend Architect",
    "UI Architect",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "AI SaaS",
    "Web Performance",
    "GSAP Animations",
  ],
  authors: [{ name: "Kumar Kartikey" }],
  creator: "Kumar Kartikey",
  metadataBase: new URL("https://kartikey.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikey.dev",
    title: "Kumar Kartikey | Senior Frontend Architect & UI Expert",
    description:
      "Senior Frontend Architect & UI Expert with 7+ years of experience building high-performance AI SaaS, React, Next.js, and React Native applications.",
    siteName: "Kumar Kartikey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Kartikey | Senior Frontend Architect & UI Expert",
    description:
      "Senior Frontend Architect specializing in Next.js, React, TypeScript, GSAP, and AI UX performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-cyan-500/20 selection:text-cyan-400 max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
