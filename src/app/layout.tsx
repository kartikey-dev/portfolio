import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
  description:
    "Portfolio of Kumar Kartikey — Senior Frontend Engineer & UI Expert with 7+ years of experience engineering scalable AI-powered SaaS, React, Next.js, and React Native applications.",
  keywords: [
    "Kumar Kartikey",
    "Senior Frontend Engineer",
    "UI Expert",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "AI SaaS",
    "Web Performance",
    "GSAP Animations",
  ],
  authors: [{ name: "Kumar Kartikey" }],
  creator: "Kumar Kartikey",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://portfolio-topaz-iota-zs571dsyg5.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikey.dev",
    title: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
    description:
      "Senior Frontend Engineer & UI Expert with 7+ years of experience building high-performance AI SaaS, React, Next.js, and React Native applications.",
    siteName: "Kumar Kartikey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
    description:
      "Senior Frontend Engineer & UI Expert specializing in Next.js, React, TypeScript, GSAP, and AI UX performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1C2023" },
    { media: "(prefers-color-scheme: dark)", color: "#1C2023" },
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
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
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
      <body
        className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[#709FA8]/30 selection:text-[#709FA8] max-w-full overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
