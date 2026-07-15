import type { Metadata } from "next";
import { Suspense } from "react";

import { SearchClient } from "@/app/cerca/search-client";

export const metadata: Metadata = {
  title: "Cerca",
  description:
    "Cerca guide, recensioni, confronti, categorie e servizi su KingDeals.",
};

export default function SearchPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Ricerca
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Cerca su KingDeals
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Trova rapidamente guide, recensioni, confronti e informazioni sui
            servizi.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <p className="text-slate-500">Caricamento della ricerca...</p>
            }
          >
            <SearchClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}