import {
  BookOpen,
  Headphones,
  Music2,
  PackageCheck,
} from "lucide-react";

import { AffiliateDisclosure } from "@/components/common/affiliate-disclosure";
import { ServiceCard } from "@/components/services/service-card";
import { affiliateLinks } from "@/lib/affiliate-links";

const services = [
  {
    title: "Prime",
    description:
      "Un servizio in abbonamento che riunisce diverse funzionalità Amazon. Prima di aderire, verifica sul sito Amazon le condizioni, i servizi inclusi e l'eventuale disponibilità di periodi promozionali.",
    suitableFor:
      "Chi utilizza con frequenza i servizi Amazon e desidera valutare in un unico posto le funzionalità attualmente incluse.",
    href: affiliateLinks.prime,
    ctaLabel: "Scopri Prime",
    icon: PackageCheck,
  },
  {
    title: "Kindle Unlimited",
    description:
      "Un servizio dedicato alla lettura digitale. Il catalogo, i dispositivi compatibili e le condizioni possono cambiare nel tempo e vanno verificati direttamente su Amazon.",
    suitableFor:
      "Lettori abituali che desiderano valutare un servizio in abbonamento dedicato a ebook e contenuti digitali.",
    href: affiliateLinks.kindleUnlimited,
    ctaLabel: "Scopri Kindle Unlimited",
    icon: BookOpen,
  },
  {
    title: "Audible",
    description:
      "Un servizio incentrato sull'ascolto di audiolibri e altri contenuti audio. Disponibilità, catalogo e condizioni sono indicati nella pagina ufficiale Amazon.",
    suitableFor:
      "Chi preferisce ascoltare libri e contenuti audio durante viaggi, allenamenti o momenti liberi.",
    href: affiliateLinks.audible,
    ctaLabel: "Scopri Audible",
    icon: Headphones,
  },
  {
    title: "Amazon Music Unlimited",
    description:
      "Un servizio di streaming musicale. Piani, catalogo, dispositivi supportati e condizioni aggiornate sono consultabili direttamente sul sito Amazon.",
    suitableFor:
      "Chi ascolta musica frequentemente e vuole confrontare le caratteristiche del servizio con le proprie esigenze.",
    href: affiliateLinks.amazonMusic,
    ctaLabel: "Scopri Amazon Music",
    icon: Music2,
  },
];

export function AmazonServicesSection() {
  return (
    <section
      id="servizi-amazon"
      aria-labelledby="amazon-services-title"
      className="bg-white py-20 dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Servizi digitali
          </p>

          <h2
            id="amazon-services-title"
            className="mt-3 text-3xl font-black tracking-tight sm:text-5xl"
          >
            Conosci i servizi prima di scegliere
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Una panoramica introduttiva per capire a chi possono essere utili.
            Condizioni, cataloghi, compatibilità e disponibilità devono sempre
            essere verificati sulla pagina ufficiale del servizio.
          </p>
        </div>

        <div className="mt-8 max-w-3xl">
          <AffiliateDisclosure />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-500">
          KingDeals non gestisce iscrizioni, pagamenti, rinnovi o assistenza per
          questi servizi. Per informazioni definitive consulta condizioni e
          dettagli disponibili su Amazon.it.
        </p>
      </div>
    </section>
  );
}