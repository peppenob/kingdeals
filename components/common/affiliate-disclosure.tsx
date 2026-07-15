import { Info } from "lucide-react";

type AffiliateDisclosureProps = {
  compact?: boolean;
};

export function AffiliateDisclosure({
  compact = false,
}: AffiliateDisclosureProps) {
  return (
    <aside
      aria-label="Informativa di affiliazione Amazon"
      className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100"
    >
      <div className="flex items-start gap-3">
        <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p className={`font-semibold leading-6 ${compact ? "text-xs" : "text-sm"}`}>
          In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti
          idonei.
        </p>
      </div>
    </aside>
  );
}
