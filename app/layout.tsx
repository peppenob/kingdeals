import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingdeals.netlify.app"),

  title: {
    default: "KingDeals | Guide, Recensioni e Confronti per Acquistare Meglio",
    template: "%s | KingDeals",
  },

  description:
    "KingDeals pubblica guide, recensioni, confronti e approfondimenti originali per aiutarti a scegliere prodotti e servizi in modo più consapevole.",

  applicationName: "KingDeals",

  authors: [
    {
      name: "KingDeals",
    },
  ],

  creator: "KingDeals",
  publisher: "KingDeals",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "KingDeals",
    title: "KingDeals | Guide, Recensioni e Confronti per Acquistare Meglio",
    description:
      "Guide, recensioni, confronti e approfondimenti originali per aiutarti a scegliere prodotti e servizi in modo più consapevole.",
  },

  twitter: {
    card: "summary_large_image",
    title: "KingDeals | Guide, Recensioni e Confronti per Acquistare Meglio",
    description:
      "Guide, recensioni, confronti e approfondimenti originali per aiutarti a scegliere prodotti e servizi in modo più consapevole.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}