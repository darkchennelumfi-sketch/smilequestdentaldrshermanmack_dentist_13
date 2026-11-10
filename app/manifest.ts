import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SmileQuest Dental",
    short_name: "SmileQuest",
    description:
      "Comprehensive dentistry in Devils Lake, North Dakota — general, cosmetic, restorative, children’s, and endodontic care under one roof.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#1b2a22",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
