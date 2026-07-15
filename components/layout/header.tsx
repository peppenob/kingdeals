import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { KingDealsLogo } from "@/components/common/kingdeals-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navigation = [
  { label: "Guide", href: "/guide" },
  { label: "Recensioni", href: "/recensioni" },
  { label: "Confronti", href: "/confronti" },
  { label: "Servizi", href: "/servizi" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <KingDealsLogo />

        <nav
          aria-label="Navigazione principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cerca"
            aria-label="Cerca"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <Search className="h-5 w-5" />
          </Link>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Apri menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}