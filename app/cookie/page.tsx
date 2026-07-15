import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informazioni sull’utilizzo dei cookie su KingDeals.",
};

export default function CookiePage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Informazioni legali
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Cookie Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Informazioni sui cookie e sulle tecnologie utilizzate dal sito.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-3xl font-black">Cookie tecnici</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              KingDeals può utilizzare tecnologie strettamente necessarie al
              funzionamento del sito, ad esempio per memorizzare la preferenza
              relativa al tema chiaro o scuro.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">
              Cookie analitici e pubblicitari
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Nella versione attuale non è stato configurato un servizio
              analitico o pubblicitario direttamente sul sito.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Collegamenti esterni</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Visitando siti esterni tramite i collegamenti presenti nelle
              pagine, tali siti possono applicare le proprie tecnologie secondo
              le rispettive informative.
            </p>
          </article>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            Prima di aggiungere Google Analytics, strumenti pubblicitari,
            newsletter o altri servizi di tracciamento dovremo introdurre una
            gestione del consenso adeguata.
          </div>
        </div>
      </section>
    </>
  );
}