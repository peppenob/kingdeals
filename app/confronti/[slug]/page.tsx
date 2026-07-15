import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Scale } from "lucide-react";

const comparisons = {
  "windows-vs-mac": {
    title: "Notebook Windows o Mac?",
    first: "Windows",
    second: "Mac",
    description:
      "Confronto tra compatibilità, semplicità, costi e integrazione software.",
    firstPoints: [
      "Ampia scelta di modelli",
      "Compatibilità estesa",
      "Numerose fasce di prezzo",
    ],
    secondPoints: [
      "Integrazione hardware e software",
      "Interfaccia coerente",
      "Buona integrazione con altri dispositivi Apple",
    ],
    conclusion:
      "Windows può essere preferibile per varietà e compatibilità; Mac può essere più adatto a chi cerca un ecosistema integrato.",
  },

  "cuffie-vs-auricolari": {
    title: "Cuffie over-ear o auricolari?",
    first: "Cuffie over-ear",
    second: "Auricolari",
    description:
      "Confronto tra comfort, portabilità, isolamento e autonomia.",
    firstPoints: [
      "Maggiore comfort per alcuni utenti",
      "Possibile migliore isolamento",
      "Batterie generalmente più grandi",
    ],
    secondPoints: [
      "Maggiore portabilità",
      "Custodia compatta",
      "Più pratici durante spostamenti e attività",
    ],
    conclusion:
      "Le cuffie sono spesso preferibili per lunghe sessioni; gli auricolari sono più comodi da trasportare.",
  },

  "oled-vs-mini-led": {
    title: "OLED o Mini LED?",
    first: "OLED",
    second: "Mini LED",
    description:
      "Confronto tra contrasto, luminosità e utilizzo in ambienti differenti.",
    firstPoints: [
      "Neri profondi",
      "Ottimo contrasto",
      "Risposta rapida",
    ],
    secondPoints: [
      "Elevata luminosità",
      "Adatto ad ambienti luminosi",
      "Ampia varietà di formati",
    ],
    conclusion:
      "OLED eccelle nel contrasto; Mini LED può risultare più adatto in ambienti molto luminosi.",
  },

  "tablet-vs-notebook": {
    title: "Tablet o notebook?",
    first: "Tablet",
    second: "Notebook",
    description:
      "Confronto tra portabilità, produttività, software e accessori.",
    firstPoints: [
      "Compatto e leggero",
      "Ottimo per lettura e contenuti",
      "Interfaccia touch",
    ],
    secondPoints: [
      "Migliore per attività complesse",
      "Tastiera integrata",
      "Maggiore compatibilità software",
    ],
    conclusion:
      "Il tablet è ideale per mobilità e consumo di contenuti; il notebook resta più versatile per lavoro complesso.",
  },

  "console-vs-pc": {
    title: "Console o PC da gaming?",
    first: "Console",
    second: "PC",
    description:
      "Confronto tra semplicità, costi, prestazioni e possibilità di aggiornamento.",
    firstPoints: [
      "Configurazione semplice",
      "Esperienza standardizzata",
      "Costi iniziali generalmente più prevedibili",
    ],
    secondPoints: [
      "Maggiore possibilità di personalizzazione",
      "Aggiornabilità",
      "Utilizzabile anche per produttività",
    ],
    conclusion:
      "La console privilegia semplicità e immediatezza; il PC offre maggiore flessibilità.",
  },

  "smartwatch-vs-fitness-tracker": {
    title: "Smartwatch o fitness tracker?",
    first: "Smartwatch",
    second: "Fitness tracker",
    description:
      "Confronto tra funzioni, autonomia, dimensioni e monitoraggio.",
    firstPoints: [
      "Più applicazioni",
      "Notifiche avanzate",
      "Display più ampio",
    ],
    secondPoints: [
      "Autonomia spesso superiore",
      "Dimensioni più compatte",
      "Focus sull’attività fisica",
    ],
    conclusion:
      "Lo smartwatch offre più funzioni; il fitness tracker punta su semplicità e autonomia.",
  },
} as const;

type ComparisonSlug = keyof typeof comparisons;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons[slug as ComparisonSlug];

  if (!comparison) {
    return {
      title: "Confronto non trovato",
    };
  }

  return {
    title: comparison.title,
    description: comparison.description,
  };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = comparisons[slug as ComparisonSlug];

  if (!comparison) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/confronti"
            className="inline-flex items-center gap-2 font-bold text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Tutti i confronti
          </Link>

          <Scale className="mt-10 h-10 w-10 text-blue-600" />

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            {comparison.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {comparison.description}
          </p>
        </div>
      </section>

      <article className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[comparison.first, comparison.second].map((title, index) => {
              const points =
                index === 0
                  ? comparison.firstPoints
                  : comparison.secondPoints;

              return (
                <section
                  key={title}
                  className="rounded-3xl border border-slate-200 p-8 dark:border-slate-800"
                >
                  <h2 className="text-3xl font-black">{title}</h2>

                  <ul className="mt-7 space-y-4">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <section className="mt-8 rounded-3xl bg-blue-600 p-8 text-white">
            <h2 className="text-3xl font-black">Conclusione</h2>

            <p className="mt-4 leading-8 text-blue-50">
              {comparison.conclusion}
            </p>
          </section>
        </div>
      </article>
    </>
  );
}