import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KingDeals | Guide, Recensioni e Confronti per Acquistare Meglio",
    short_name: "KingDeals",
    description:
      "Guide, recensioni, confronti e approfondimenti originali per scegliere prodotti e servizi in modo più consapevole.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    lang: "it-IT",
    categories: ["shopping", "lifestyle", "news"],
  };
}