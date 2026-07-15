import Link from "next/link";

type KingDealsLogoProps = {
  showText?: boolean;
};

export function KingDealsLogo({
  showText = true,
}: KingDealsLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Vai alla homepage di KingDeals"
      className="inline-flex items-center gap-3"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center">
        <svg
          viewBox="0 0 64 64"
          role="img"
          aria-hidden="true"
          className="h-full w-full"
        >
          <path
            d="M32 4 54 12v17c0 14.5-8.9 25.2-22 31C18.9 54.2 10 43.5 10 29V12L32 4Z"
            className="fill-blue-600"
          />

          <path
            d="M32 9 49 15v14c0 11.2-6.4 20.1-17 25.4C21.4 49.1 15 40.2 15 29V15L32 9Z"
            className="fill-blue-700"
          />

          <path
            d="M24 18h6v12l10-12h7L35.7 31 48 47h-7.5L30 33.4V47h-6V18Z"
            className="fill-white"
          />
        </svg>
      </span>

      {showText && (
        <span className="text-xl font-black tracking-tight">
          King<span className="text-blue-600">Deals</span>
        </span>
      )}
    </Link>
  );
}