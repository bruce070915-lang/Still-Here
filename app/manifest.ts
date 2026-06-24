import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "STILL HERE",
    short_name: "STILL HERE",
    description:
      "Official visual treatment and interactive pitch deck for STILL HERE, a non-sync short film written and directed by Yihao Shi.",
    start_url: "/",
    display: "standalone",
    background_color: "#060708",
    theme_color: "#060708",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
