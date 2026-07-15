import type { Metadata } from "next";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta la redazione di KingDeals per segnalazioni, correzioni e richieste editoriali.",
};

const contactEmail = "contatti@kingdeals.it";

export default function ContactsPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Contatti
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Parla con la redazione
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Puoi scriverci per segnalare un errore, proporre un argomento o
            richiedere informazioni sul progetto editoriale.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-slate-200 p-8 dark:border-slate-800">
            <Mail className="h-9 w-9 text-blue-600" />

            <h2 className="mt-5 text-2xl font-black">Email</h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Scrivi all’indirizzo:
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-block break-all font-bold text-blue-600"
            >
              {contactEmail}
            </a>
          </article>

          <article className="rounded-3xl border border-slate-200 p-8 dark:border-slate-800">
            <MessageCircle className="h-9 w-9 text-blue-600" />

            <h2 className="mt-5 text-2xl font-black">
              Assistenza per acquisti e servizi
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Per ordini, resi, pagamenti, rinnovi o problemi con un servizio
              Amazon devi rivolgerti direttamente all’assistenza Amazon.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 p-7 dark:bg-slate-950">
            <ShieldCheck className="h-7 w-7 text-blue-600" />

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Prima della pubblicazione sostituisci l’indirizzo email indicato
              nel codice, qualora non possieda ancora il dominio
              kingdeals.it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}