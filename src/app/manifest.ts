import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
    short_name: "Kartikey Portfolio",
    description:
      "Portfolio of Kumar Kartikey — Senior Frontend Engineer & UI Expert with 7+ years of experience engineering scalable AI SaaS, React, Next.js, and React Native applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#1C2023",
    theme_color: "#1C2023",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
