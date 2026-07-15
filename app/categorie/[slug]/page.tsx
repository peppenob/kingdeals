import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const categories = {
  informatica: {
    title: "Informatica",
    description: "Guide e approfondimenti su notebook, monitor e accessori.",
    links: [
      {
        title: "Come scegliere un notebook",
        href: "/guide/come-scegliere-notebook",
      },
      {
        title: "Come scegliere un monitor",
        href: "/guide/come-scegliere-monitor",
      },
      {
        title: "Monitor pensato per il lavoro",
        href: "/recensioni/monitor-da-lavoro",
      },
    ],
  },

  smartphone: {
    title: "Smartphone",
    description: "Guide su telefoni, dispositivi mobili e criteri di scelta.",
    links: [
      {
        title: "Come scegliere uno smartphone",
        href: "/guide/come-scegliere-smartphone",
      },
    ],
  },

  gaming: {
    title: "Gaming",
    description: "Guide e confronti dedicati a console e videogiochi.",
    links: [
      {
        title: "Come scegliere una console",
        href: "/guide/come-scegliere-console",
      },
      {
        title: "Console o PC da gaming?",
        href: "/confronti/console-vs-pc",
      },
    ],
  },

  audio: {
    title: "Audio",
    description: "Cuffie, auricolari, ascolto e qualità sonora.",
    links: [
      {
        title: "Come scegliere le cuffie Bluetooth",
        href: "/guide/come-scegliere-cuffie-bluetooth",
      },
      {
        title: "Cuffie over-ear o auricolari?",
        href: "/confronti/cuffie-vs-auricolari",
      },
      {
        title: "Cuffie wireless per uso quotidiano",
        href: "/recensioni/cuffie-wireless",
      },
    ],
  },

  tv: {
    title: "TV",
    description: "Guide e confronti su televisori e tecnologie dei pannelli.",
    links: [
      {
        title: "Come scegliere una Smart TV",
        href: "/guide/come-scegliere-smart-tv",
      },
      {
        title: "OLED o Mini LED?",
        href: "/confronti/oled-vs-mini-led",
      },
    ],
  },

  casa: {
    title: "Casa",
    description:
      "Contenuti dedicati a prodotti utili per gli ambienti domestici.",
    links: [],
  },

  wearable: {
    title: "Wearable",
    description: "Smartwatch, fitness tracker e dispositivi indossabili.",
    links: [
      {
        title: "Smartwatch per sport e benessere",
        href: "/recensioni/smartwatch-sportivo",
      },
      {
        title: "Smartwatch o fitness tracker?",
        href: "/confronti/smartwatch-vs-fitness-tracker",
      },
    ],
  },

  tablet: {
    title: "Tablet",
    description: "Guide e confronti dedicati a tablet ed e-reader.",
    links: [
      {
        title: "Tablet o notebook?",
        href: "/confronti/tablet-vs-notebook",
      },
    ],
  },
} as const;

type CategorySlug = keyof typeof categories;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug as CategorySlug];

  if (!category) {
    return {
      title: "Categoria non trovata",
    };
  }

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories[slug as CategorySlug];

  if (!category) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Torna alla Home
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Categoria
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            {category.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {category.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {category.links.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {category.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 p-7 transition hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
                >
                  <h2 className="text-2xl font-black">{item.title}</h2>

                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">
                    Apri il contenuto
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 p-8 dark:border-slate-800">
              <h2 className="text-2xl font-black">
                Nuovi contenuti in preparazione
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Stiamo preparando guide e approfondimenti originali per questa
                categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}