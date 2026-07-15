import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  Headphones,
  Laptop,
  Smartphone,
  Tv,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guide all’acquisto",
  description:
    "Guide originali e pratiche per scegliere prodotti tecnologici e servizi in modo più consapevole.",
};

const guides = [
  {
    title: "Come scegliere un notebook",
    description:
      "Processore, memoria, schermo, autonomia e connettività: tutto ciò che serve valutare.",
    category: "Informatica",
    href: "/guide/come-scegliere-notebook",
    icon: Laptop,
  },
  {
    title: "Come scegliere uno smartphone",
    description:
      "Fotocamera, batteria, display, memoria e aggiornamenti spiegati in modo semplice.",
    category: "Smartphone",
    href: "/guide/come-scegliere-smartphone",
    icon: Smartphone,
  },
  {
    title: "Come scegliere le cuffie Bluetooth",
    description:
      "Comfort, autonomia, qualità audio e cancellazione del rumore a confronto.",
    category: "Audio",
    href: "/guide/come-scegliere-cuffie-bluetooth",
    icon: Headphones,
  },
  {
    title: "Come scegliere una Smart TV",
    description:
      "Dimensioni, tecnologia del pannello, sistema operativo e porte disponibili.",
    category: "TV",
    href: "/guide/come-scegliere-smart-tv",
    icon: Tv,
  },
  {
    title: "Come scegliere un monitor",
    description:
      "Risoluzione, frequenza, dimensioni ed ergonomia per lavoro e intrattenimento.",
    category: "Informatica",
    href: "/guide/come-scegliere-monitor",
    icon: Laptop,
  },
  {
    title: "Come scegliere una console",
    description:
      "Catalogo, prestazioni, servizi online e costi complessivi da considerare.",
    category: "Gaming",
    href: "/guide/come-scegliere-console",
    icon: Gamepad2,
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            KingDeals
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Guide all’acquisto per scegliere con maggiore consapevolezza
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Approfondimenti originali sui criteri da valutare prima di scegliere
            un prodotto. Le guide non riportano prezzi o disponibilità non
            verificati.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const Icon = guide.icon;

              return (
                <article
                  key={guide.title}
                  className="flex flex-col rounded-3xl border border-slate-200 p-7 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      {guide.category}
                    </span>

                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h2 className="mt-6 text-2xl font-black">{guide.title}</h2>

                  <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                    {guide.description}
                  </p>

                  <Link
                    href={guide.href}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
                  >
                    Leggi la guida
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <BookOpen className="h-9 w-9 text-blue-600" />

            <h2 className="mt-5 text-3xl font-black">Come scriviamo le guide</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Ogni guida è pensata per spiegare caratteristiche, vantaggi,
              limiti e casi d’uso. Non copiamo descrizioni, recensioni o altri
              contenuti dal catalogo Amazon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}