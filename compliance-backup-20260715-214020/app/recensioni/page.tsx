import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Recensioni editoriali",
  description:
    "Recensioni originali KingDeals con analisi di vantaggi, limiti, qualità e facilità d’uso.",
};

const reviews = [
  {
    title: "Cuffie wireless per uso quotidiano",
    category: "Audio",
    score: "8.7",
    description:
      "Comfort, qualità delle chiamate, autonomia e semplicità di utilizzo.",
    href: "/recensioni/cuffie-wireless",
  },
  {
    title: "Smartwatch per sport e benessere",
    category: "Wearable",
    score: "8.4",
    description:
      "Display, funzioni fitness, precisione dei sensori ed esperienza quotidiana.",
    href: "/recensioni/smartwatch-sportivo",
  },
  {
    title: "Monitor pensato per il lavoro",
    category: "Informatica",
    score: "9.0",
    description:
      "Ergonomia, nitidezza, porte disponibili e comfort durante lunghe sessioni.",
    href: "/recensioni/monitor-da-lavoro",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Valutazioni originali
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Recensioni editoriali chiare, equilibrate e indipendenti
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I punteggi KingScore sono valutazioni originali di KingDeals. Non
            rappresentano voti, stelle o recensioni provenienti da Amazon.
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
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold dark:bg-slate-800">
                  {review.category}
                </span>

                <div className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-white">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    KingScore
                  </p>
                  <p className="mt-1 text-2xl font-black">{review.score}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <h2 className="mt-4 text-2xl font-black">{review.title}</h2>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {review.description}
              </p>

              <Link
                href={review.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
              >
                Leggi la recensione
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
                Consideriamo qualità, prestazioni, facilità d’uso, affidabilità
                e rapporto tra caratteristiche e costo complessivo.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <CheckCircle2 className="h-8 w-8 text-blue-600" />
              <h2 className="mt-5 text-2xl font-black">Contenuti originali</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Non pubblichiamo recensioni copiate da Amazon o valutazioni
                presentate come se provenissero dai suoi clienti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}