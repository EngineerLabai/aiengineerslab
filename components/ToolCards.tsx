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
      <div className="fancy-card">
        <article className="card-inner group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:scale-[1.01] md:p-5">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm transition-colors group-hover:shadow-md anim-float">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-slate-50 md:text-base">{title}</h3>
              {badge && (
                <span
                  className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${badgeClasses} badge-accent`}
                >
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-700 md:text-sm">{description}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
          <span className="text-[13px] text-slate-700">Detaylı hesaplama aracı</span>
          <span className="inline-flex items-center gap-2 text-white btn-cta px-3 py-1.5">
            Aç
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        <div className="pointer-events-none absolute -inset-x-1 -bottom-2 h-12 translate-y-4 bg-gradient-to-r from-emerald-100/20 via-amber-100/10 to-sky-100/10 opacity-0 blur-3xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-80 rounded-b-2xl" />
      </article>
      </div>
    </Link>
  );
}
