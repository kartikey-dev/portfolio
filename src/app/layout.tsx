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
  title: "Kumar Kartikey | Senior Frontend Engineer",
  description:
    "Portfolio of Kumar Kartikey — Senior Frontend Engineer with 6.5+ years experience building scalable AI-powered SaaS, React, Next.js, and React Native applications.",
  keywords: [
    "Kumar Kartikey",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Architect",
    "AI SaaS",
    "Web Performance",
  ],
  authors: [{ name: "Kumar Kartikey" }],
  creator: "Kumar Kartikey",
  metadataBase: new URL("https://kartikey.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikey.dev",
    title: "Kumar Kartikey | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6.5+ years experience building scalable AI-powered SaaS, React, Next.js, and React Native applications.",
    siteName: "Kumar Kartikey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Kartikey | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js, React, TypeScript, and AI UX performance.",
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
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        {children}
      </body>
    </html>
  );
}
