import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Confronti",
  description:
    "Confronti originali tra categorie, tecnologie e soluzioni per capire differenze, vantaggi e limiti.",
};

const comparisons = [
  {
    title: "Notebook Windows o Mac?",
    description:
      "Compatibilità, facilità d’uso, costi, aggiornamenti e durata nel tempo.",
    href: "/confronti/windows-vs-mac",
  },
  {
    title: "Cuffie over-ear o auricolari?",
    description:
      "Portabilità, isolamento, comfort e qualità del suono a confronto.",
    href: "/confronti/cuffie-vs-auricolari",
  },
  {
    title: "OLED o Mini LED?",
    description:
      "Contrasto, luminosità, gaming e utilizzo in ambienti molto illuminati.",
    href: "/confronti/oled-vs-mini-led",
  },
  {
    title: "Tablet o notebook?",
    description:
      "Produttività, portabilità, software e accessori necessari.",
    href: "/confronti/tablet-vs-notebook",
  },
  {
    title: "Console o PC da gaming?",
    description:
      "Costi, semplicità, prestazioni, aggiornamenti e catalogo dei giochi.",
    href: "/confronti/console-vs-pc",
  },
  {
    title: "Smartwatch o fitness tracker?",
    description:
      "Funzioni, autonomia, dimensioni e monitoraggio dell’attività fisica.",
    href: "/confronti/smartwatch-vs-fitness-tracker",
  },
];

export default function ComparisonsPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Scale className="h-10 w-10 text-blue-600" />

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Confronti per capire quale soluzione è più adatta a te
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Mettiamo a confronto caratteristiche, vantaggi, limiti e casi d’uso
            senza dichiarare un vincitore assoluto quando non esiste.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {comparisons.map((comparison) => (
            <article
              key={comparison.title}
              className="group rounded-3xl border border-slate-200 p-7 transition hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                Confronto editoriale
              </p>

              <h2 className="mt-4 text-2xl font-black">{comparison.title}</h2>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {comparison.description}
              </p>

              <Link
                href={comparison.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
              >
                Apri il confronto
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}