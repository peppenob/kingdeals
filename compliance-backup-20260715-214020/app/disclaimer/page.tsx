import type { Metadata } from "next";
import { Info, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer e affiliazione",
  description:
    "Informazioni sulla partecipazione di KingDeals al Programma Affiliazione Amazon.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Info className="h-10 w-10 text-blue-600" />

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Disclaimer e informativa di affiliazione
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Informazioni sulla natura editoriale del sito e sulla presenza di
            collegamenti affiliati.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-3xl font-black">Affiliazione Amazon</h2>

            <p className="mt-4 text-lg font-bold leading-8">
              In qualità di Affiliato Amazon io ricevo un guadagno dagli
              acquisti idonei.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Alcuni collegamenti presenti su KingDeals sono link affiliati. Se
              un utente effettua un’azione idonea dopo aver utilizzato tali
              collegamenti, KingDeals può ricevere una commissione.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Indipendenza editoriale</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Le valutazioni, i confronti e i contenuti pubblicati rappresentano
              opinioni editoriali originali di KingDeals. Non sono recensioni
              provenienti da Amazon o dai suoi clienti.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">
              Prezzi, disponibilità e condizioni
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Prezzi, cataloghi, disponibilità, promozioni e condizioni possono
              cambiare. Le informazioni definitive sono quelle mostrate sul
              sito Amazon al momento della visita.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Marchi</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Amazon e gli altri marchi citati appartengono ai rispettivi
              proprietari. KingDeals è un progetto editoriale indipendente e
              non rappresenta Amazon.
            </p>
          </article>

          <div className="rounded-3xl bg-slate-50 p-7 dark:bg-slate-950">
            <ShieldCheck className="h-8 w-8 text-blue-600" />

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Questa pagina è una base informativa e non sostituisce una
              consulenza legale professionale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}