import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const guides = {
  "come-scegliere-notebook": {
    title: "Come scegliere un notebook",
    description:
      "Processore, memoria, schermo, autonomia e connettività: i criteri principali da valutare.",
    category: "Informatica",
    sections: [
      {
        title: "Definisci l’utilizzo principale",
        text: "Prima di confrontare le specifiche, chiarisci se il notebook servirà per navigazione, studio, lavoro, montaggio video o gaming. Le esigenze cambiano notevolmente.",
      },
      {
        title: "Processore e memoria",
        text: "Per attività quotidiane è generalmente più importante avere una configurazione equilibrata che scegliere il componente più potente disponibile.",
      },
      {
        title: "Schermo e autonomia",
        text: "Dimensioni, risoluzione, luminosità e durata della batteria incidono direttamente sulla comodità d’uso.",
      },
    ],
  },

  "come-scegliere-smartphone": {
    title: "Come scegliere uno smartphone",
    description:
      "Display, fotocamera, batteria, memoria e aggiornamenti spiegati in modo semplice.",
    category: "Smartphone",
    sections: [
      {
        title: "Parti dalle tue priorità",
        text: "Fotografia, autonomia, prestazioni, dimensioni e durata del supporto software hanno un peso diverso per ogni utente.",
      },
      {
        title: "Memoria e aggiornamenti",
        text: "Valuta lo spazio disponibile e la durata prevista degli aggiornamenti di sicurezza.",
      },
      {
        title: "Batteria e ricarica",
        text: "La capacità nominale non racconta tutto: efficienza del processore e ottimizzazione software sono altrettanto importanti.",
      },
    ],
  },

  "come-scegliere-cuffie-bluetooth": {
    title: "Come scegliere le cuffie Bluetooth",
    description:
      "Comfort, autonomia, qualità audio e cancellazione del rumore.",
    category: "Audio",
    sections: [
      {
        title: "Comfort e vestibilità",
        text: "Una buona qualità sonora serve a poco se le cuffie risultano scomode dopo pochi minuti.",
      },
      {
        title: "Autonomia",
        text: "Considera sia la durata per singola carica sia la velocità di ricarica.",
      },
      {
        title: "Qualità delle chiamate",
        text: "Microfoni e gestione del rumore ambientale sono fondamentali per lavoro e telefonate.",
      },
    ],
  },

  "come-scegliere-smart-tv": {
    title: "Come scegliere una Smart TV",
    description:
      "Dimensioni, pannello, sistema operativo e connettività.",
    category: "TV",
    sections: [
      {
        title: "Dimensioni e distanza",
        text: "Le dimensioni ideali dipendono dalla distanza di visione e dalla risoluzione dei contenuti.",
      },
      {
        title: "Tecnologia del pannello",
        text: "OLED, Mini LED e LCD tradizionali offrono vantaggi differenti in contrasto, luminosità e prezzo.",
      },
      {
        title: "Sistema operativo",
        text: "Verifica disponibilità delle applicazioni, velocità dell’interfaccia e durata degli aggiornamenti.",
      },
    ],
  },

  "come-scegliere-monitor": {
    title: "Come scegliere un monitor",
    description:
      "Risoluzione, frequenza, dimensioni ed ergonomia per lavoro e intrattenimento.",
    category: "Informatica",
    sections: [
      {
        title: "Utilizzo professionale o gaming",
        text: "Le caratteristiche importanti cambiano in base all’uso: fedeltà cromatica, frequenza di aggiornamento o connettività.",
      },
      {
        title: "Risoluzione e dimensioni",
        text: "La densità dei pixel influenza nitidezza e spazio di lavoro.",
      },
      {
        title: "Ergonomia",
        text: "Regolazione in altezza, inclinazione e supporto VESA migliorano il comfort.",
      },
    ],
  },

  "come-scegliere-console": {
    title: "Come scegliere una console",
    description:
      "Catalogo, prestazioni, servizi online e costi complessivi.",
    category: "Gaming",
    sections: [
      {
        title: "Catalogo dei giochi",
        text: "La disponibilità dei titoli che preferisci dovrebbe essere il primo criterio.",
      },
      {
        title: "Servizi online",
        text: "Valuta costi ricorrenti, giochi inclusi e funzionalità multiplayer.",
      },
      {
        title: "Spazio e accessori",
        text: "Memoria interna, controller aggiuntivi e accessori incidono sul costo complessivo.",
      },
    ],
  },
} as const;

type GuideSlug = keyof typeof guides;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];

  if (!guide) {
    return {
      title: "Guida non trovata",
    };
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 font-bold text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Tutte le guide
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            {guide.category}
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            {guide.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {guide.description}
          </p>
        </div>
      </section>

      <article className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-600" />

                  <div>
                    <h2 className="text-2xl font-black">{section.title}</h2>

                    <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                      {section.text}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl font-black">Nota editoriale</h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Questa guida contiene informazioni originali e non riporta prezzi,
              disponibilità, recensioni clienti o descrizioni copiate da Amazon.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}