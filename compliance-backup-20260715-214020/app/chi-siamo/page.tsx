import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Scopri il progetto editoriale KingDeals, il nostro metodo e il modo in cui gestiamo i link affiliati.",
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
            KingDeals è un progetto editoriale indipendente dedicato a guide,
            recensioni e confronti originali su prodotti e servizi.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800">
            <Target className="h-9 w-9 text-blue-600" />

            <h2 className="mt-5 text-2xl font-black">La nostra missione</h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Spiegare caratteristiche, vantaggi e limiti in modo semplice,
              senza presentare ogni prodotto come adatto a tutti.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800">
            <CheckCircle2 className="h-9 w-9 text-blue-600" />

            <h2 className="mt-5 text-2xl font-black">Contenuti originali</h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Non copiamo descrizioni, recensioni clienti o altri contenuti
              provenienti dalle pagine Amazon.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800">
            <ShieldCheck className="h-9 w-9 text-blue-600" />

            <h2 className="mt-5 text-2xl font-black">Trasparenza</h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Alcuni collegamenti sono affiliati. La presenza di una
              commissione non modifica il costo sostenuto dall’utente.
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
                Valutiamo i prodotti in base alle esigenze per cui sono stati
                progettati, considerando facilità d’uso, caratteristiche,
                affidabilità e rapporto tra funzioni e costo complessivo.
              </p>

              <p>
                I punteggi KingScore, quando presenti, sono valutazioni
                editoriali originali e non rappresentano voti o recensioni
                provenienti da Amazon.
              </p>

              <p>
                KingDeals non è Amazon e non gestisce ordini, iscrizioni,
                pagamenti, spedizioni, rinnovi o assistenza clienti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}