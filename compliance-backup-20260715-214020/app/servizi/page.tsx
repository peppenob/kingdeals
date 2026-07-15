import type { Metadata } from "next";

import { AffiliateDisclosure } from "@/components/common/affiliate-disclosure";
import { AmazonServicesSection } from "@/components/services/amazon-services-section";

export const metadata: Metadata = {
  title: "Servizi digitali",
  description:
    "Panoramiche informative su Prime, Kindle Unlimited, Audible e Amazon Music Unlimited.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Servizi Amazon
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Informazioni utili prima di valutare un servizio
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Le condizioni, i cataloghi, la compatibilità e le eventuali
            promozioni possono cambiare. Verifica sempre i dettagli definitivi
            direttamente sul sito Amazon.
          </p>

          <div className="mt-8 max-w-3xl">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>

      <AmazonServicesSection />

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Domande frequenti</h2>

          <div className="mt-8 space-y-5">
            <details className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-bold">
                KingDeals gestisce le iscrizioni?
              </summary>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                No. Iscrizioni, pagamenti, rinnovi, annullamenti e assistenza
                sono gestiti direttamente da Amazon.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-bold">
                Le condizioni mostrate sono sempre aggiornate?
              </summary>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Per informazioni definitive devi consultare la pagina ufficiale
                Amazon, perché condizioni e disponibilità possono cambiare.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-bold">
                I collegamenti sono affiliati?
              </summary>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Sì. KingDeals può ricevere un guadagno dalle azioni idonee
                effettuate tramite i collegamenti indicati.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}