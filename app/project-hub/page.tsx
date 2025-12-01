// app/project-hub/page.tsx
import Link from "next/link";

export default function ProjectHubPage() {
  return (
    <div className="space-y-6">
      {/* Başlık */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Proje Mühendisleri Alanı
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-600">
            Proje · RFQ · Parça / Revizyon Takibi
          </span>
        </div>

        <h1 className="text-lg font-semibold text-slate-900">
          Proje Mühendisleri Ana Paneli
        </h1>
        <p className="mt-2 text-xs text-slate-600">
          Müşteri projeleri, proses iyileştirmeleri, RFQ teklif süreçleri ve
          parça revizyonlarını tek yerden takip etmen için hafif bir yönetim
          alanı. Şimdilik tüm araçlar free; ileride PDF/Excel çıktı ve ekip
          bazlı paylaşım özellikleri premium’a taşınabilir.
        </p>
      </section>

      {/* Alt modüller kartları */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* Yeni Proje / İyileştirme */}
        <HubCard
          title="Yeni Proje / İyileştirme Takip Paneli"
          description="Müşteri projeleri, hat iyileştirmeleri ve Kaizen çalışmalarını kayıt altına al ve durum / öncelik bazlı takip et."
          href="/project-hub/project-tools"
          badge="Aktif"
        />

        {/* RFQ Takip */}
        <HubCard
          title="RFQ / Teklif Takip Paneli"
          description="Müşteri RFQ'larını (Request for Quotation) takip et, son tarihleri, durumları ve sorumlu kişileri kaydet."
          href="/project-hub/rfq"
          badge="Aktif"
        />

        {/* Parça / Revizyon Takibi */}
        <HubCard
          title="Parça / Revizyon Takip Paneli"
          description="Parça revizyonlarını, değişen çizimleri ve etkilenen dokümanları izlemek için hafif bir takip listesi."
          href="/project-hub/part-tracking"
          badge="Aktif"
        />
      </section>
    </div>
  );
}

type HubCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

function HubCard({ title, description, href, badge }: HubCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-xs shadow-sm hover:border-slate-300 hover:shadow-md">
      <div>
        <div className="mb-2 flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
          {badge && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
              {badge}
            </span>
          )}
        </div>
        <p className="text-[11px] text-slate-700">{description}</p>
      </div>
      <div className="mt-3">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-slate-800"
        >
          Modülü Aç
        </Link>
      </div>
    </article>
  );
}
