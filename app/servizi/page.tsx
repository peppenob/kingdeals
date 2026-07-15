import type { Metadata } from "next";
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
            Servizi digitali
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Informazioni utili prima di valutare un servizio
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Cataloghi, compatibilità, requisiti e condizioni possono cambiare.
            Verifica sempre i dettagli definitivi sulla pagina ufficiale del
            servizio.
          </p>
        </div>
      </section>

      <AmazonServicesSection />

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Domande frequenti</h2>
          <div className="mt-8 space-y-5">
            <details className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-bold">
                KingDeals gestisce iscrizioni o pagamenti?
              </summary>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                No. Iscrizioni, pagamenti, rinnovi, annullamenti e assistenza
                sono gestiti dal sito di destinazione.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-bold">
                Le condizioni possono cambiare?
              </summary>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Sì. Per informazioni definitive consulta sempre la pagina
                ufficiale del servizio al momento della visita.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
