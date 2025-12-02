// app/project-hub/page.tsx
import Link from "next/link";

type HubCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

const hubs: HubCardProps[] = [
  {
    title: "Devreye Alma Paneli",
    description: "Komisyoning adımları: hazırlık, temizlik, torklama, ön test, sıcak/soğuk çevrim, loglama.",
    href: "/project-hub/devreye-alma",
    badge: "Yeni",
  },
  {
    title: "Yeni Proje / İyileştirme Takip Paneli",
    description:
      "Müşteri projeleri, hat iyileştirmeleri ve Kaizen çalışmalarını kayıt altına al ve durum / öncelik bazlı takip et.",
    href: "/project-hub/project-tools",
    badge: "Aktif",
  },
  {
    title: "RFQ / Teklif Takip Paneli",
    description:
      "Müşteri RFQ'larının (Request for Quotation) son tarihlerini, durumlarını ve sorumlu kişileri kaydet.",
    href: "/project-hub/rfq",
    badge: "Aktif",
  },
  {
    title: "Parça / Revizyon Takip Paneli",
    description:
      "Parça revizyonları, değişen çizimler ve etkilenen dokümanları izlemek için hafif bir takip listesi.",
    href: "/project-hub/part-tracking",
    badge: "Aktif",
  },
];

export default function ProjectHubPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_24%)]" />
        <div className="relative space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] text-sky-700 md:text-xs">
            <span className="font-semibold">Proje Mühendisleri Alanı</span>
            <span className="hidden text-slate-500 sm:inline">Proje · RFQ · Parça / Revizyon Takibi</span>
          </div>

          <h1 className="text-balance text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
            Proje, RFQ ve revizyonları tek panelden yönet
          </h1>
          <p className="text-sm leading-relaxed text-slate-700">
            Müşteri projeleri, proses iyileştirmeleri, RFQ teklif süreçleri ve parça revizyonlarını tek yerden
            takip etmen için hafif bir yönetim alanı. Şimdilik tüm araçlar free; ileride PDF/Excel çıktıları ve ekip
            paylaşımları premium’a taşınabilir.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {hubs.map((hub) => (
          <HubCard key={hub.title} {...hub} />
        ))}
      </section>
    </div>
  );
}

function HubCard({ title, description, href, badge }: HubCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 text-xs shadow-sm hover:border-slate-300 hover:shadow-md">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold leading-snug text-slate-900 break-words">{title}</h2>
          {badge && (
            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700">{badge}</span>
          )}
        </div>
        <p className="text-[11px] leading-relaxed text-slate-700 break-words">{description}</p>
      </div>
      <div className="mt-3">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-sky-600 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-sky-500"
        >
          Modülü Aç
        </Link>
      </div>
    </article>
  );
}
