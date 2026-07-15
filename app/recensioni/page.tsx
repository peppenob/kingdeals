import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Analisi editoriali",
  description:
    "Analisi originali KingDeals su caratteristiche, vantaggi, limiti e casi d’uso.",
};

const reviews = [
  {
    title: "Cosa valutare nelle cuffie wireless",
    category: "Audio",
    description:
      "Comfort, qualità delle chiamate, autonomia, controlli e utilizzo in ambienti rumorosi.",
    href: "/recensioni/cuffie-wireless",
  },
  {
    title: "Cosa valutare in uno smartwatch sportivo",
    category: "Wearable",
    description:
      "Display, funzioni fitness, autonomia, precisione e semplicità nell’uso quotidiano.",
    href: "/recensioni/smartwatch-sportivo",
  },
  {
    title: "Cosa valutare in un monitor da lavoro",
    category: "Informatica",
    description:
      "Ergonomia, nitidezza, porte disponibili, comfort visivo e organizzazione della scrivania.",
    href: "/recensioni/monitor-da-lavoro",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Analisi originali
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Approfondimenti editoriali chiari e verificabili
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Queste pagine non attribuiscono punteggi a prodotti non testati.
            Spiegano invece criteri, vantaggi e limiti utili per valutare una
            categoria di prodotto.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {reviews.map((review) => (
            <article
              key={review.title}
              className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800"
            >
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold dark:bg-slate-800">
                {review.category}
              </span>
              <h2 className="mt-6 text-2xl font-black">{review.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {review.description}
              </p>
              <Link
                href={review.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
              >
                Leggi l’analisi
                <ArrowRight className="h-5 w-5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <h2 className="mt-5 text-2xl font-black">Metodo editoriale</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Consideriamo qualità costruttiva, facilità d’uso, compatibilità,
                durata prevista e costi ricorrenti.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <CheckCircle2 className="h-8 w-8 text-blue-600" />
              <h2 className="mt-5 text-2xl font-black">Nessun voto inventato</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Pubblicheremo un punteggio soltanto per prodotti identificabili
                e con criteri documentati.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
