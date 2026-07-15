import Link from "next/link";

const footerGroups = [
  {
    title: "Contenuti",
    links: [
      { label: "Guide", href: "/guide" },
      { label: "Recensioni", href: "/recensioni" },
      { label: "Confronti", href: "/confronti" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Servizi",
    links: [
      { label: "Prime", href: "/servizi/prime" },
      { label: "Kindle Unlimited", href: "/servizi/kindle-unlimited" },
      { label: "Audible", href: "/servizi/audible" },
      { label: "Amazon Music Unlimited", href: "/servizi/amazon-music" },
    ],
  },
  {
    title: "Informazioni",
    links: [
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Contatti", href: "/contatti" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie", href: "/cookie" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-black text-white">
              King<span className="text-blue-400">Deals</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Guide, analisi e confronti originali per aiutarti a scegliere
              prodotti e servizi con maggiore consapevolezza.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-bold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-sm font-semibold leading-6 text-slate-300">
            In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti
            idonei.
          </p>
          <p className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} KingDeals. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
