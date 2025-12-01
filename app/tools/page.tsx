// app/tools/page.tsx
import Link from "next/link";

export default function ToolsIndexPage() {
  return (
    <div className="space-y-6">
      {/* Giriş kartı */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="mb-2 text-xl font-semibold text-slate-900">
          Mekanik Hesaplayıcılar ve Teknik Araçlar
        </h1>

        <p className="mb-4 text-sm text-slate-700">
          Bu bölümde çekme gerilmesi, cıvata boyut ve tork hesaplayıcıları, malzeme
          kartları ve kademeli olarak eklenen eğilme/torsiyon, kompresör kapasitesi,
          kasnak kayışı ve güç–tork hesaplayıcılarını bulursun. Şu anda tüm araçlar
          ücretsiz (free) olarak kullanılabilir.
        </p>

        <p className="text-xs text-slate-600">
          Hesaplayıcılar hızlı mühendislik kontrolleri içindir. Nihai tasarım
          kararlarında her zaman ilgili standartlara, müşteri şartnamelerine ve detaylı
          hesap dokümanlarına bakılmalıdır.
        </p>
      </section>

      {/* Araç kartları */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ToolCard
          title="Cıvata Boyut & Tork"
          description="Nominal çap, diş adımı ve kaliteye göre gerilme alanı, ön yük ve önerilen tork aralığını hesapla."
          href="/tools/bolt-calculator"
          variant="primary"
        />

        <ToolCard
          title="Çekme Gerilmesi"
          description="Kuvvet ve kesit alanına göre çekme gerilmesini ve emniyet katsayısını hızlıca hesapla."
          href="/tools/simple-stress"
          variant="dark"
        />

        <ToolCard
          title="Eğilme & Sehim"
          description="Basit mesnetli kiriş için ortada tekil yük altında eğilme gerilmesi ve maksimum sehim hesabı."
          href="/tools/bending-stress"
          variant="outline"
        />

        <ToolCard
          title="Standart Cıvata Veri Merkezi"
          description="Standart metrik, UNC ve UNF cıvatalar için diş ölçüleri, matkap çapları ve kalite sınıfları."
          href="/tools/bolt-database"
        />

        <ToolCard
          title="Kompresör CC / Debi"
          description="Piston çapı, strok, silindir adedi ve rpm ile hacimsel kapasite (cc/rev, L/min) tahmini."
          href="/tools/compressor-cc"
        />

        <ToolCard
          title="Kasnak Kayışı Uzunluğu"
          description="İki kasnak çapı ve merkez mesafesine göre açık kayış uzunluğu ve temel sarma açısı tahmini."
          href="/tools/belt-length"
        />

        <ToolCard
          title="Güç–Tork–Devir"
          description="kW/hp ve rpm ilişkisine göre torku veya gücü hesapla; tipik mekanik verim seçimi."
          href="/tools/torque-power"
        />

        <ToolCard
          title="Mukavemet & Statik (çoklu)"
          description="Eksenel+kesme birleşik gerilme, Euler burkulma ve mil eğilme+tork birleşik gerilme hesapları."
          href="/tools/strength-statics"
        />

        <ToolCard
          title="Makine Elemanları (çoklu)"
          description="Rulman L10 ömrü, kamalı mil kesme/ezilme kontrolü ve basit dişli yükleri."
          href="/tools/machine-elements"
        />

        <ToolCard
          title="Akışkanlar & HVAC (çoklu)"
          description="Reynolds/sürtünme ve basınç kaybı, kanal hız yöntemi, ACH ↔ debi hesapları."
          href="/tools/fluids-hvac"
        />

        <ToolCard
          title="Isı Transferi & Enerji (çoklu)"
          description="LMTD ile HX alan tahmini, 1D iletim+konveksiyon ısı kaybı, PV panel güç tahmini."
          href="/tools/heat-energy"
        />

        <ToolCard
          title="Malzeme & İmalat (çoklu)"
          description="Kesme parametresi önerisi, ISO tolerans/fit kontrolü, kaynak sembol/çekme özetleri."
          href="/tools/materials-manufacturing"
        />

        <ToolCard
          title="Üretim & Proje (çoklu)"
          description="Takt/OEE hızlı hesap, tolerans yığılımı ve CPM süre/float tahmini."
          href="/tools/production-project"
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
