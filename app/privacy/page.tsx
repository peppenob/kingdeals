import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informazioni sul trattamento dei dati personali su KingDeals.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Informazioni legali
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Informazioni generali sul trattamento dei dati personali.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-3xl font-black">Stato attuale del sito</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Nella versione attuale KingDeals non dispone di registrazione
              utenti, area personale, newsletter attiva o modulo di contatto
              che memorizzi dati sul server.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Dati tecnici</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Il fornitore di hosting può trattare dati tecnici necessari alla
              sicurezza e al funzionamento del servizio, come indirizzi IP, log
              e informazioni sul dispositivo.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Collegamenti esterni</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Quando visiti un collegamento esterno, incluso Amazon.it, il
              trattamento dei dati avviene secondo l’informativa del sito di
              destinazione.
            </p>
          </article>

          <article>
            <h2 className="text-3xl font-black">Contatti</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Prima della pubblicazione devono essere inseriti i dati reali del
              titolare del sito e un indirizzo di contatto valido.
            </p>
          </article>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            Questa pagina deve essere aggiornata quando verranno aggiunti
            analytics, cookie, newsletter, form, database o servizi esterni.
          </div>
        </div>
      </section>
    </>
  );
}