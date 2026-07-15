import type { Metadata } from "next";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Informazioni editoriali e dichiarazione richiesta dal Programma di Affiliazione Amazon.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Info className="h-10 w-10 text-blue-600" />
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Disclaimer
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Informazioni sulla natura editoriale dei contenuti e sui
            collegamenti esterni presenti nel sito.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-amber-200 bg-amber-50 p-8 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            <h2 className="text-2xl font-black">Dichiarazione di affiliazione</h2>
            <p className="mt-4 text-lg font-bold leading-8">
              In qualità di Affiliato Amazon io ricevo un guadagno dagli
              acquisti idonei.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Contenuti editoriali</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Guide, confronti e analisi pubblicati su KingDeals sono contenuti
              originali. Le informazioni hanno finalità informative e devono
              essere valutate in relazione alle esigenze personali del lettore.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">
              Informazioni sul sito di destinazione
            </h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Prezzi, disponibilità, cataloghi, promozioni, requisiti e
              condizioni possono cambiare. Le informazioni definitive sono
              quelle mostrate sul sito di destinazione al momento della visita.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Assistenza</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              KingDeals non gestisce ordini, pagamenti, spedizioni, rinnovi,
              annullamenti, resi o assistenza relativi ai siti esterni.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
