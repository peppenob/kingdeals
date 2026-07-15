import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";

const articles = {
  "errori-scelta-notebook": {
    title: "Cinque errori da evitare quando scegli un notebook",
    category: "Informatica",
    description:
      "Specifiche importanti, compromessi nascosti e domande da porsi.",
    paragraphs: [
      "Il primo errore è scegliere esclusivamente in base al prezzo o alla potenza dichiarata del processore.",
      "Un notebook deve essere valutato come un insieme: display, tastiera, autonomia, memoria, porte e qualità costruttiva.",
      "È inoltre importante verificare che dimensioni e peso siano adatti al proprio utilizzo quotidiano.",
      "Infine, considera la durata prevista del dispositivo e la possibilità di aggiornare memoria o archiviazione.",
    ],
  },

  "come-leggere-scheda-tecnica": {
    title: "Come leggere correttamente una scheda tecnica",
    category: "Guide pratiche",
    description:
      "Un metodo semplice per distinguere informazioni utili da termini commerciali.",
    paragraphs: [
      "Una scheda tecnica elenca caratteristiche, ma non sempre spiega come incidono nell’utilizzo reale.",
      "Concentrati prima sugli aspetti collegati alle tue esigenze: autonomia, dimensioni, compatibilità e prestazioni.",
      "Evita di confrontare numeri isolati senza considerare software, efficienza e qualità complessiva.",
      "Consulta sempre fonti differenti e verifica le informazioni più importanti.",
    ],
  },

  "prodotto-costoso-non-sempre-migliore": {
    title: "Perché il prodotto più costoso non è sempre il più adatto",
    category: "Consigli",
    description:
      "Come valutare esigenze reali, frequenza d’uso e caratteristiche necessarie.",
    paragraphs: [
      "Un prezzo maggiore può riflettere materiali, prestazioni o funzioni che non tutti utilizzano.",
      "La scelta migliore dipende dal contesto e non dal posizionamento commerciale del prodotto.",
      "Definisci un budget dopo aver individuato le funzioni indispensabili.",
      "Un prodotto equilibrato e adatto alle proprie esigenze può offrire più valore di un modello superiore ma sovradimensionato.",
    ],
  },
} as const;

type ArticleSlug = keyof typeof articles;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    return {
      title: "Articolo non trovato",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Torna al blog
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            {article.category}
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {article.description}
          </p>
        </div>
      </section>

      <article className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <BookOpen className="h-9 w-9 text-blue-600" />

          <div className="mt-8 space-y-7">
            {article.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-9 text-slate-700 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}