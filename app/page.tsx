// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Giriş kartı */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900 mb-2">
          AIEngineersLab
        </h1>

        <p className="text-sm text-slate-700 mb-4">
          Otomotiv, mekanik tasarım, üretim, kalite ve malzeme bilimi
          alanlarında mühendisler için hesaplayıcılar, tablolar ve teknik
          araçlar sunan bir platform.
        </p>

        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
          <li>Cıvata / vida boyut ve tolerans hesaplayıcıları</li>
          <li>Malzeme (çelik, alüminyum, elastomer) bilgi kartları</li>
          <li>Gerilme, tork ve dayanım hesaplayıcıları</li>
          <li>Kalite araçları: 5N1K, 5 Why, FMEA iskeletleri</li>
          <li>
            Üretim ve proses hesaplamaları (tork, gerilme, emniyet katsayıları)
          </li>
        </ul>

        <p className="text-sm text-slate-600">
          Şu anda aktif araçlar:{" "}
          <strong>Cıvata Boyut Hesaplayıcı</strong>,{" "}
          <strong>Malzeme Bilgi Kartları</strong> ve{" "}
          <strong>Çekme Gerilmesi Hesaplayıcı</strong>.
        </p>
      </section>

      {/* Araç kartları */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
        <ToolCard
          title="Cıvata Boyut Hesaplayıcı"
          description="Nominal çap, diş adımı ve kaliteye göre cıvata boyutlarını ve temel değerleri hesapla."
          href="/tools/bolt-calculator"
          variant="primary"
        />

        <ToolCard
          title="Malzeme Bilgi Kartları"
          description="Çelik, alüminyum ve elastomer malzemeler için temel mekanik özellik ve kullanım alanları."
          href="/tools/material-cards"
          variant="outline"
        />

        <ToolCard
          title="Çekme Gerilmesi Hesaplayıcı"
          description="Kuvvet ve kesit alanına göre gerilmeyi ve emniyet katsayısını hızlıca hesapla."
          href="/tools/simple-stress"
          variant="dark"
        />

        <ToolCard
          title="Standart Cıvata Veri Merkezi"
          description="Standart cıvata boyutları, diş profilleri ve gerilme alanları için referans veri tabanı."
          href="/tools/bolt-database"
          variant="neutral"
        />

        <ToolCard
          title="Proje Mühendisleri Alanı"
          description="Müşteri projeleri, hat iyileştirmeleri ve Kaizen çalışmalarını kayıt altına al ve takip et."
          href="/project-hub"   // 🔴 ÖNEMLİ: Artık /project-hub
          variant="outline"
        />
      </section>
    </div>
  );
}

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  variant?: "primary" | "outline" | "dark" | "neutral";
};

function ToolCard({
  title,
  description,
  href,
  variant = "neutral",
}: ToolCardProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-semibold transition";
  const variantClasses = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    dark: "bg-slate-700 text-white hover:bg-slate-600",
    neutral:
      "border border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400",
  } as const;

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm hover:border-slate-300 hover:shadow-md">
      <div>
        <h2 className="mb-1 text-sm font-semibold text-slate-900">{title}</h2>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
      <div className="mt-4">
        <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
          Aracı Aç
        </Link>
      </div>
    </div>
  );
}
