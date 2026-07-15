import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookMarked, Lightbulb, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Approfondimenti, consigli pratici e spiegazioni su tecnologia, casa, audio, gaming e servizi digitali.",
};

const articles = [
  {
    title: "Cinque errori da evitare quando scegli un notebook",
    category: "Informatica",
    description:
      "Specifiche importanti, compromessi nascosti e domande da porsi prima dell’acquisto.",
    href: "/blog/errori-scelta-notebook",
    icon: Lightbulb,
  },
  {
    title: "Come leggere correttamente una scheda tecnica",
    category: "Guide pratiche",
    description:
      "Un metodo semplice per distinguere informazioni utili da termini puramente commerciali.",
    href: "/blog/come-leggere-scheda-tecnica",
    icon: BookMarked,
  },
  {
    title: "Perché il prodotto più costoso non è sempre il più adatto",
    category: "Consigli",
    description:
      "Come valutare esigenze reali, frequenza d’uso e caratteristiche necessarie.",
    href: "/blog/prodotto-costoso-non-sempre-migliore",
    icon: Newspaper,
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Approfondimenti
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Il blog di KingDeals
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Articoli originali per comprendere meglio prodotti, tecnologie,
            servizi e criteri di scelta.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="flex flex-col rounded-3xl border border-slate-200 p-7 dark:border-slate-800"
              >
                <Icon className="h-8 w-8 text-blue-600" />

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                  {article.category}
                </p>

                <h2 className="mt-3 text-2xl font-black">{article.title}</h2>

                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
                >
                  Leggi l’articolo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}