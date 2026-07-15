import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Gamepad2,
  Headphones,
  HomeIcon,
  Laptop,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TabletSmartphone,
  Tv,
  Watch,
} from "lucide-react";

import { AmazonServicesSection } from "@/components/services/amazon-services-section";

const categories = [
  {
    title: "Informatica",
    description: "Notebook, monitor, accessori e componenti.",
    href: "/categorie/informatica",
    icon: Laptop,
  },
  {
    title: "Smartphone",
    description: "Telefoni, accessori e dispositivi mobili.",
    href: "/categorie/smartphone",
    icon: Smartphone,
  },
  {
    title: "Gaming",
    description: "Console, periferiche e postazioni da gioco.",
    href: "/categorie/gaming",
    icon: Gamepad2,
  },
  {
    title: "Audio",
    description: "Cuffie, auricolari, speaker e microfoni.",
    href: "/categorie/audio",
    icon: Headphones,
  },
  {
    title: "TV",
    description: "Televisori, streaming e home cinema.",
    href: "/categorie/tv",
    icon: Tv,
  },
  {
    title: "Casa",
    description: "Prodotti utili per la vita quotidiana.",
    href: "/categorie/casa",
    icon: HomeIcon,
  },
  {
    title: "Wearable",
    description: "Smartwatch, fitness tracker e accessori.",
    href: "/categorie/wearable",
    icon: Watch,
  },
  {
    title: "Tablet",
    description: "Tablet, e-reader e accessori dedicati.",
    href: "/categorie/tablet",
    icon: TabletSmartphone,
  },
];

const guides = [
  {
    title: "Come scegliere un notebook",
    description:
      "Processore, memoria, autonomia e schermo: i criteri davvero importanti prima dell’acquisto.",
    category: "Informatica",
    readingTime: "8 min",
    href: "/guide/come-scegliere-notebook",
  },
  {
    title: "Come scegliere le cuffie Bluetooth",
    description:
      "Una guida pratica per valutare comfort, autonomia, qualità audio e cancellazione del rumore.",
    category: "Audio",
    readingTime: "7 min",
    href: "/guide/come-scegliere-cuffie-bluetooth",
  },
  {
    title: "Come scegliere una Smart TV",
    description:
      "Dimensioni, pannello, sistema operativo e connettività spiegati in modo semplice.",
    category: "TV",
    readingTime: "9 min",
    href: "/guide/come-scegliere-smart-tv",
  },
];

const reviews = [
  {
    title: "Recensione editoriale: cuffie wireless",
    description:
      "Analisi di comfort, qualità delle chiamate, autonomia e semplicità d’uso.",
    score: "8.7",
    category: "Audio",
    href: "/recensioni/cuffie-wireless",
  },
  {
    title: "Recensione editoriale: smartwatch sportivo",
    description:
      "Valutazione delle funzioni fitness, del display e dell’esperienza quotidiana.",
    score: "8.4",
    category: "Wearable",
    href: "/recensioni/smartwatch-sportivo",
  },
  {
    title: "Recensione editoriale: monitor da lavoro",
    description:
      "Ergonomia, nitidezza, porte disponibili e comodità nelle sessioni prolungate.",
    score: "9.0",
    category: "Informatica",
    href: "/recensioni/monitor-da-lavoro",
  },
];

const comparisons = [
  {
    title: "Notebook Windows o Mac?",
    description:
      "Confrontiamo approccio, compatibilità, facilità d’uso e costi complessivi.",
    href: "/confronti/windows-vs-mac",
  },
  {
    title: "Cuffie over-ear o auricolari?",
    description:
      "Comfort, isolamento, portabilità e qualità sonora a confronto.",
    href: "/confronti/cuffie-vs-auricolari",
  },
  {
    title: "OLED o Mini LED?",
    description:
      "Differenze principali per film, gaming, luminosità e utilizzo quotidiano.",
    href: "/confronti/oled-vs-mini-led",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_38%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Guide indipendenti e confronti dettagliati
            </p>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Scegli meglio.
              <span className="block text-blue-600">
                Compra con più consapevolezza.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Guide originali, recensioni editoriali e confronti pratici per
              aiutarti a capire quali prodotti e servizi sono più adatti alle
              tue esigenze.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Esplora le guide
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/servizi"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                Scopri i servizi
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:gap-6">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Contenuti originali
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                Link affiliati dichiarati
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Il nostro metodo
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Informazioni utili prima di ogni scelta.
            </h2>

            <ul className="mt-8 space-y-5 text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                Analizziamo vantaggi, limiti e casi d&apos;uso.
              </li>

              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                Non pubblichiamo prezzi statici o disponibilità non verificate.
              </li>

              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                Non copiamo recensioni, descrizioni o immagini da Amazon.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <form action="/cerca" className="relative">
            <label htmlFor="search" className="sr-only">
              Cerca una guida, una recensione o un confronto
            </label>

            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              id="search"
              name="q"
              type="search"
              placeholder="Cerca una guida, una recensione o un confronto..."
              className="h-16 w-full rounded-2xl border border-slate-300 bg-slate-50 pl-14 pr-36 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:focus:ring-blue-950"
            />

            <button
              type="submit"
              className="absolute right-2 top-2 h-12 rounded-xl bg-blue-600 px-6 font-bold text-white transition hover:bg-blue-700"
            >
              Cerca
            </button>
          </form>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Esplora
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Scegli una categoria
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Trova guide e approfondimenti organizzati per argomento.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 text-xl font-black">{category.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                    Esplora
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                Guide
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Guide in evidenza
              </h2>
            </div>

            <Link
              href="/guide"
              className="inline-flex items-center gap-2 font-bold text-blue-600"
            >
              Vedi tutte le guide
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {guide.category}
                  </span>

                  <span className="text-xs text-slate-500">
                    {guide.readingTime}
                  </span>
                </div>

                <BookOpen className="mt-8 h-8 w-8 text-blue-600" />

                <h3 className="mt-5 text-2xl font-black">{guide.title}</h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
                >
                  Leggi la guida
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Recensioni
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Ultime valutazioni editoriali
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I punteggi sono valutazioni originali di KingDeals e non
              rappresentano recensioni o valutazioni Amazon.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {review.category}
                  </span>

                  <div className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-white">
                    <p className="text-xs font-bold uppercase tracking-wider">
                      KingScore
                    </p>
                    <p className="mt-1 text-2xl font-black">{review.score}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <h3 className="mt-4 text-2xl font-black">{review.title}</h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {review.description}
                </p>

                <Link
                  href={review.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
                >
                  Leggi la recensione
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Confronti
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Differenze spiegate in modo semplice
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {comparisons.map((comparison) => (
              <article
                key={comparison.title}
                className="group rounded-3xl border border-slate-200 p-7 transition hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
              >
                <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                  Confronto
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  {comparison.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {comparison.description}
                </p>

                <Link
                  href={comparison.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600"
                >
                  Apri il confronto
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AmazonServicesSection />

      <section className="bg-blue-600 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">
            Newsletter
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Ricevi nuove guide e confronti
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            La newsletter verrà attivata dopo aver configurato il consenso,
            l’informativa privacy e un servizio di invio conforme al GDPR.
          </p>

          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Indirizzo email
            </label>

            <input
              id="newsletter-email"
              type="email"
              disabled
              placeholder="Newsletter in preparazione"
              className="h-14 flex-1 rounded-xl border border-white/20 bg-white/10 px-5 text-white placeholder:text-blue-100 disabled:cursor-not-allowed"
            />

            <button
              type="button"
              disabled
              className="h-14 rounded-xl bg-white px-7 font-bold text-blue-700 disabled:cursor-not-allowed disabled:opacity-80"
            >
              Prossimamente
            </button>
          </form>

          <p className="mt-4 text-xs text-blue-100">
            Non raccogliamo ancora indirizzi email.
          </p>
        </div>
      </section>
    </>
  );
}