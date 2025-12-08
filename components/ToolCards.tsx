import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  badge?: string;
  badgeVariant?: "new" | "multi" | "dev";
};

export function ToolCard({
  title,
  description,
  href,
  icon,
  badge,
  badgeVariant = "multi",
}: ToolCardProps) {
  const badgeClasses =
    badgeVariant === "new"
      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/40"
      : badgeVariant === "dev"
      ? "bg-amber-500/10 text-amber-300 border-amber-500/40"
      : "bg-sky-500/10 text-sky-300 border-sky-500/40";

  return (
    <Link href={href} className="block h-full" prefetch={false}>
      <article className="group relative flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm transition-colors hover:border-sky-500/60 hover:bg-slate-900 md:p-5">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 transition-colors group-hover:bg-sky-900/70">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-slate-50 md:text-base">{title}</h3>
              {badge && (
                <span
                  className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${badgeClasses}`}
                >
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-300 md:text-sm">{description}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>Detaylı hesaplama aracı</span>
          <span className="inline-flex items-center gap-1 text-sky-400 transition-colors group-hover:text-sky-300">
            Aç
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 translate-y-3 bg-sky-500/30 opacity-0 blur-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-60" />
      </article>
    </Link>
  );
}
