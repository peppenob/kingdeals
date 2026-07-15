import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  XCircle,
} from "lucide-react";

const reviews = {
  "cuffie-wireless": {
    title: "Cuffie wireless per uso quotidiano",
    category: "Audio",
    score: "8.7",
    description:
      "Valutazione editoriale di comfort, autonomia, chiamate e semplicità d’uso.",
    pros: [
      "Comode per sessioni prolungate",
      "Buona autonomia complessiva",
      "Controlli semplici",
    ],
    cons: [
      "Isolamento variabile in ambienti rumorosi",
      "Prestazioni del microfono dipendenti dall’ambiente",
    ],
    verdict:
      "Una soluzione equilibrata per ascolto quotidiano, telefonate e contenuti multimediali.",
  },

  "smartwatch-sportivo": {
    title: "Smartwatch per sport e benessere",
    category: "Wearable",
    score: "8.4",
    description:
      "Analisi editoriale di display, funzioni fitness, autonomia e facilità d’uso.",
    pros: [
      "Interfaccia semplice",
      "Buona varietà di funzioni sportive",
      "Design adatto all’uso quotidiano",
    ],
    cons: [
      "Autonomia dipendente dalle funzioni attive",
      "Alcune metriche richiedono interpretazione",
    ],
    verdict:
      "Adatto a chi desidera un dispositivo versatile per attività e notifiche.",
  },

  "monitor-da-lavoro": {
    title: "Monitor pensato per il lavoro",
    category: "Informatica",
    score: "9.0",
    description:
      "Valutazione editoriale di ergonomia, nitidezza e connettività.",
    pros: [
      "Buona leggibilità del testo",
      "Supporto ergonomico",
      "Connettività completa",
    ],
    cons: [
      "Dimensioni da valutare in base alla scrivania",
      "Non necessariamente adatto al gaming competitivo",
    ],
    verdict:
      "Una scelta valida per produttività, studio e utilizzo professionale.",
  },
} as const;

type ReviewSlug = keyof typeof reviews;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(reviews).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews[slug as ReviewSlug];

  if (!review) {
    return {
      title: "Recensione non trovata",
    };
  }

  return {
    title: review.title,
    description: review.description,
  };
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = reviews[slug as ReviewSlug];

  if (!review) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/recensioni"
            className="inline-flex items-center gap-2 font-bold text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Tutte le recensioni
          </Link>

          <div className="mt-8 flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                {review.category}
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                {review.title}
              </h1>
            </div>

            <div className="w-fit rounded-3xl bg-blue-600 px-6 py-5 text-center text-white">
              <p className="text-xs font-black uppercase tracking-wider">
                KingScore
              </p>
              <p className="mt-2 text-4xl font-black">{review.score}</p>
              <p className="text-sm">su 10</p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {review.description}
          </p>
        </div>
      </section>

      <article className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7 dark:border-emerald-900 dark:bg-emerald-950/30">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />

              <h2 className="mt-5 text-2xl font-black">Vantaggi</h2>

              <ul className="mt-5 space-y-3">
                {review.pros.map((item) => (
                  <li key={item} className="leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-rose-200 bg-rose-50 p-7 dark:border-rose-900 dark:bg-rose-950/30">
              <XCircle className="h-8 w-8 text-rose-600" />

              <h2 className="mt-5 text-2xl font-black">Limiti</h2>

              <ul className="mt-5 space-y-3">
                {review.cons.map((item) => (
                  <li key={item} className="leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-10 rounded-3xl border border-slate-200 p-8 dark:border-slate-800">
            <ShieldCheck className="h-8 w-8 text-blue-600" />

            <h2 className="mt-5 text-3xl font-black">
              Valutazione conclusiva
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {review.verdict}
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              KingScore è una valutazione editoriale originale di KingDeals e
              non rappresenta voti o recensioni provenienti da Amazon.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}