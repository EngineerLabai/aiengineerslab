// app/tools/page.tsx
import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  variant?: "primary" | "outline" | "dark" | "neutral";
};

const tools: ToolCardProps[] = [
  {
    title: "Cıvata Boyut & Tork",
    description:
      "Nominal çap, diş adımı ve kaliteye göre gerilme alanı, ön yük ve önerilen tork aralığını hesapla.",
    href: "/tools/bolt-calculator",
    variant: "primary",
  },
  {
    title: "Çekme Gerilmesi",
    description: "Kuvvet ve kesit alanına göre çekme gerilmesini ve emniyet katsayısını hızlıca hesapla.",
    href: "/tools/simple-stress",
    variant: "dark",
  },
  {
    title: "Eğilme & Sehim",
    description:
      "Basit mesnetli kiriş için ortada tekil yük altında eğilme gerilmesi ve maksimum sehim hesabı.",
    href: "/tools/bending-stress",
    variant: "outline",
  },
  {
    title: "Standart Cıvata Veri Merkezi",
    description: "Metrik, UNC ve UNF cıvatalar için diş ölçüleri, matkap çapları ve kalite sınıfları.",
    href: "/tools/bolt-database",
  },
  {
    title: "Kompresör CC / Debi",
    description:
      "Piston çapı, strok, silindir adedi ve rpm ile hacimsel kapasite (cc/rev, L/min) tahmini.",
    href: "/tools/compressor-cc",
  },
  {
    title: "Kasnak Kayış Uzunluğu",
    description: "İki kasnak çapı ve merkez mesafesine göre açık kayış uzunluğu ve temel sarma açısı tahmini.",
    href: "/tools/belt-length",
  },
  {
    title: "Güç · Tork · Devir",
    description: "kW/hp ve rpm ilişkisine göre torku veya gücü hesapla; tipik mekanik verim seçimi.",
    href: "/tools/torque-power",
  },
  {
    title: "Mukavemet & Statik (çoklu)",
    description:
      "Eksenel+kesme birleşik gerilme, Euler burkulma ve mil eğilme+tork birleşik gerilme hesapları.",
    href: "/tools/strength-statics",
  },
  {
    title: "Makine Elemanları (çoklu)",
    description: "Rulman L10 ömrü, kamalı mil kesme/ezilme kontrolü ve basit dişli yükleri.",
    href: "/tools/machine-elements",
  },
  {
    title: "Akışkanlar & HVAC (çoklu)",
    description:
      "Reynolds/sürtünme ve basınç kaybı, kanal hız yöntemi, ACH ↔ debi hesapları.",
    href: "/tools/fluids-hvac",
  },
  {
    title: "Isı Transferi & Enerji (çoklu)",
    description: "LMTD ile HX alan tahmini, 1D iletim+konveksiyon ısı kaybı, PV panel güç tahmini.",
    href: "/tools/heat-energy",
  },
  {
    title: "Malzeme & İmalat (çoklu)",
    description: "Kesme parametresi önerisi, ISO tolerans/fit kontrolü, kaynak sembol/çekme özetleri.",
    href: "/tools/materials-manufacturing",
  },
  {
    title: "Üretim & Proje (çoklu)",
    description: "Takt/OEE hızlı hesap, tolerans yayılımı ve CPM süre/float tahmini.",
    href: "/tools/production-project",
  },
  {
    title: "Dişli Hesaplamaları ve Tasarım İncelikleri",
    description:
      "Düz/helis dişliler için Ft/Fr/Fa yükleri, modül ve oran seçimi ile malzeme/yağlama notlarının ekleneceği taslak sayfa. Şimdilik geliştiriliyor.",
    href: "/tools/gear-design",
    badge: "Geliştiriliyor",
    variant: "outline",
  },
];

export default function ToolsIndexPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(250,204,21,0.04),transparent_24%)]" />
        <div className="relative space-y-3">
          <div className="flex items-center gap-4">
            <svg className="hero-illustration text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
              <path d="M6 12h12M6 8h12M6 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] text-emerald-700 md:text-xs">
              <span className="font-semibold">Mekanik hesaplayıcılar & teknik araçlar</span>
            </div>
          </div>
          <h1 className="text-balance text-2xl font-semibold leading-snug text-slate-900 md:text-4xl">
            Üretim, kalite ve tasarım için hızlı hesaplama araçları
          </h1>
          <p className="text-sm leading-relaxed text-slate-700">
            Çekme gerilmesi, cıvata boyut ve tork, malzeme kartları ve kademeli olarak eklenen eğilme/
            torsiyon, kompresör kapasitesi, kayış ve güç-tork hesaplarını burada bulabilirsin. Şu anda
            tüm araçlar ücretsiz; ileride gelişmiş çıktılar premium’a taşınabilir.
          </p>
          <p className="text-xs leading-relaxed text-slate-600">
            Bu araçlar hızlı mühendislik kontrolleri içindir. Nihai tasarım kararlarında her zaman ilgili
            standartlar, müşteri şartnameleri ve detaylı hesap dokümanlarına bakılmalıdır.
          </p>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </section>
    </div>
  );
}

function ToolCard({ title, description, href, variant = "neutral", badge }: ToolCardProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition";
  // Using CSS variable-based class for CTA to keep color consistent across the site
  const variantClasses = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-500",
    outline: "border border-emerald-600 text-emerald-700 hover:bg-emerald-50",
    dark: "bg-emerald-800 text-white hover:bg-emerald-700",
    neutral: "border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300",
  } as const;

  return (
    <div className="card-outer rounded-3xl">
      <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-transform">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-lg font-semibold leading-snug text-slate-900 break-words">{title}</h2>
            {badge && (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-slate-600 break-words">{description}</p>
        </div>
        <div className="mt-6">
          <Link href={href} className={`${baseClasses} btn-cta block w-full rounded-md text-center py-2`}>
            Aracı Aç
          </Link>
        </div>
      </article>
    </div>
  );
}
