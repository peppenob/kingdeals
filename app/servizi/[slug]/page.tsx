import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Headphones,
  Music2,
  PackageCheck,
} from "lucide-react";

import { AffiliateDisclosure } from "@/components/common/affiliate-disclosure";
import { affiliateLinks } from "@/lib/affiliate-links";

const services = {
  prime: {
    title: "Prime",
    description:
      "Una panoramica informativa per capire il servizio e valutarne l’utilità.",
    suitableFor:
      "Può essere preso in considerazione da chi utilizza frequentemente diversi servizi Amazon.",
    considerations: [
      "Verifica sempre i servizi attualmente inclusi.",
      "Controlla costi, rinnovo e condizioni direttamente su Amazon.",
      "Valuta quante funzionalità utilizzeresti realmente.",
    ],
    href: affiliateLinks.prime,
    cta: "Consulta Prime su Amazon",
    icon: PackageCheck,
  },

  "kindle-unlimited": {
    title: "Kindle Unlimited",
    description:
      "Informazioni introduttive sul servizio dedicato alla lettura digitale.",
    suitableFor:
      "Può essere utile per lettori abituali interessati a consultare il catalogo disponibile.",
    considerations: [
      "Il catalogo può cambiare nel tempo.",
      "Non tutti i libri Kindle sono necessariamente inclusi.",
      "Verifica dispositivi compatibili e condizioni di rinnovo.",
    ],
    href: affiliateLinks.kindleUnlimited,
    cta: "Consulta Kindle Unlimited su Amazon",
    icon: BookOpen,
  },

  audible: {
    title: "Audible",
    description:
      "Una guida introduttiva al servizio dedicato agli audiolibri e ai contenuti audio.",
    suitableFor:
      "Può essere adatto a chi preferisce ascoltare contenuti durante spostamenti o attività quotidiane.",
    considerations: [
      "Verifica il catalogo attualmente disponibile.",
      "Controlla modalità di abbonamento e rinnovo.",
      "Valuta compatibilità e utilizzo offline.",
    ],
    href: affiliateLinks.audible,
    cta: "Consulta Audible su Amazon",
    icon: Headphones,
  },

  "amazon-music": {
    title: "Amazon Music Unlimited",
    description:
      "Informazioni introduttive sul servizio di streaming musicale.",
    suitableFor:
      "Può essere valutato da chi ascolta musica frequentemente su diversi dispositivi.",
    considerations: [
      "Verifica piani e dispositivi compatibili.",
      "Il catalogo e le funzionalità possono cambiare.",
      "Controlla costi e condizioni sulla pagina ufficiale.",
    ],
    href: affiliateLinks.amazonMusic,
    cta: "Consulta Amazon Music su Amazon",
    icon: Music2,
  },
} as const;

type ServiceSlug = keyof typeof services;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Servizio non trovato",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 font-bold text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Tutti i servizi
          </Link>

          <Icon className="mt-10 h-12 w-12 text-blue-600" />

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {service.description}
          </p>

          <div className="mt-8">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>

      <article className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="text-3xl font-black">A chi può essere adatto</h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {service.suitableFor}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">Cosa verificare</h2>

            <ul className="mt-6 space-y-4">
              {service.considerations.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 p-5 leading-7 dark:border-slate-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-3xl bg-slate-50 p-8 dark:bg-slate-950">
            <h2 className="text-2xl font-black">
              Verifica le condizioni ufficiali
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Prezzi, promozioni, cataloghi, disponibilità e condizioni possono
              cambiare. Controlla sempre le informazioni definitive sulla
              pagina Amazon.
            </p>

            <a
              href={service.href}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              {service.cta}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </>
  );
}