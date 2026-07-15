import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  suitableFor: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  suitableFor,
  href,
  ctaLabel,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-2xl font-black">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Può essere adatto a
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {suitableFor}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <a
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          aria-label={`${ctaLabel} sul sito Amazon`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          {ctaLabel}
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </a>

        <p className="mt-3 text-center text-xs text-slate-500">
          Il collegamento apre il sito Amazon.it.
        </p>
      </div>
    </article>
  );
}