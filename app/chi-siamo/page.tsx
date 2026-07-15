import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Scopri KingDeals, il metodo editoriale e i principi usati per creare guide e confronti originali.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Informazioni
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Aiutiamo le persone a scegliere con maggiore consapevolezza
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            KingDeals è un progetto editoriale dedicato a guide, analisi e
            confronti originali su prodotti e servizi.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800">
            <Target className="h-9 w-9 text-blue-600" />
            <h2 className="mt-5 text-2xl font-black">La nostra missione</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Spiegare caratteristiche, vantaggi e limiti senza presentare ogni
              soluzione come adatta a tutti.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800">
            <CheckCircle2 className="h-9 w-9 text-blue-600" />
            <h2 className="mt-5 text-2xl font-black">Contenuti originali</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Scriviamo testi autonomi e non ripubblichiamo descrizioni o
              recensioni degli utenti provenienti dalle pagine dei negozi.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800">
            <ShieldCheck className="h-9 w-9 text-blue-600" />
            <h2 className="mt-5 text-2xl font-black">Metodo trasparente</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Distinguiamo sempre le informazioni verificate dalle valutazioni
              editoriali e segnaliamo quando un collegamento conduce a un sito
              esterno.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-3xl font-black">Il nostro metodo</h2>
            <div className="mt-6 space-y-5 leading-8 text-slate-600 dark:text-slate-300">
              <p>
                Partiamo dall’utilizzo reale: budget, frequenza d’uso,
                compatibilità, semplicità, durata prevista e costi ricorrenti.
              </p>
              <p>
                Evitiamo classifiche assolute quando la scelta dipende dalle
                esigenze personali e motiviamo sempre vantaggi e limiti.
              </p>
              <p>
                KingDeals non gestisce ordini, iscrizioni, pagamenti,
                spedizioni, rinnovi o assistenza dei siti esterni.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
