"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { searchIndex } from "@/lib/search-index";

export function SearchClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchIndex;
    }

    return searchIndex.filter((item) => {
      const searchableText = [
        item.title,
        item.description,
        item.category,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cerca guide, recensioni, confronti e servizi..."
          aria-label="Cerca nel sito"
          className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-14 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-blue-950"
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Cancella ricerca"
            className="absolute right-4 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <p className="mt-5 text-sm text-slate-500">
        {results.length} {results.length === 1 ? "risultato" : "risultati"}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {item.category}
            </span>

            <h2 className="mt-5 text-2xl font-black">{item.title}</h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {item.description}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">
              Apri
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-black">Nessun risultato</h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Prova a utilizzare parole più generiche come notebook, cuffie,
            recensioni o servizi.
          </p>
        </div>
      )}
    </div>
  );
}