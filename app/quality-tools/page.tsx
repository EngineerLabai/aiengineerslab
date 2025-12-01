// app/quality-tools/page.tsx
import Link from "next/link";

type QualityToolStatus = "planned" | "beta";
type QualityToolLevel = "basic" | "advanced";

type QualityTool = {
  id: string;
  name: string;
  label: string;
  description: string;
  useCases: string[];
  outputFormat: string;
  status: QualityToolStatus;
  level: QualityToolLevel;
  href?: string; // hazır/planlanan sayfa yolu
  premium?: boolean; // gelecekte premium olacaksa true
};

const QUALITY_TOOLS: QualityTool[] = [
  {
    id: "5n1k",
    name: "5N1K Problem Tanımı",
    label: "5N1K",
    description:
      "Problemi netleştirmek için Ne, Nerede, Ne zaman, Nasıl, Neden ve Kim sorularını sistematik şekilde doldurmanı sağlar.",
    useCases: [
      "Kalite problemi ilk tanımlama",
      "Müşteri şikayeti analizi öncesi",
      "8D ve kök neden analizine giriş",
    ],
    outputFormat:
      "Doldurulabilir 5N1K formu (metin alanları) + PDF/Word olarak dışa aktarma (ileride).",
    status: "beta",
    level: "basic",
    href: "/quality-tools/5n1k",
    premium: false,
  },
  {
    id: "5why",
    name: "5 Why (5 Neden) Analizi",
    label: "5 Why",
    description:
      "Bir problemin kök nedenine ulaşmak için ardışık “Neden?” sorularını yapılandırılmış şekilde sorup kaydetmeyi sağlar.",
    useCases: [
      "Tekrarlayan arıza analizi",
      "Müşteri şikayetinde kök neden arayışı",
      "İç kalite uygunsuzlukları",
    ],
    outputFormat:
      "Adım adım “Neden?” zinciri, son satırda kök neden tanımı ve aksiyon listesi taslağı.",
    status: "planned",
    level: "basic",
    href: "/quality-tools/5why",
    premium: false,
  },
  {
    id: "8d",
    name: "8D Rapor İskeleti",
    label: "8D",
    description:
      "8D metodolojisine göre ekip, problem tanımı, kök neden ve kalıcı aksiyonları içeren rapor iskeleti sunar.",
    useCases: [
      "Otomotiv müşteri şikayetleri",
      "Ciddi iç uygunsuzluklar",
      "Kalıcı aksiyon gerektiren problemler",
    ],
    outputFormat:
      "D1–D8 adımlarını içeren form iskeleti, her adım için giriş alanları; ileride PDF çıktısı.",
    status: "beta",
    level: "advanced",
    href: "/quality-tools/8d",
    premium: false,
  },
  {
    id: "kaizen",
    name: "Kaizen / Sürekli İyileştirme Kartı",
    label: "Kaizen",
    description:
      "Küçük ama sürekli iyileştirmeleri takip etmek için problem–hedef–aksiyon–sonuç yapısında kayıt tutmayı sağlar.",
    useCases: [
      "Atölye/hat iyileştirmeleri",
      "Verimlilik ve ergonomi iyileştirmeleri",
      "Kayıp azaltma çalışmaları",
    ],
    outputFormat:
      "Öncesi/sonrası fotoğraf alanları (ileride), aksiyon listesi ve kazanım özet alanı.",
    status: "beta",
    level: "basic",
    href: "/quality-tools/kaizen",
    premium: false,
  },
  {
    id: "poka-yoke",
    name: "Poka-Yoke Fikir Kartı",
    label: "Poka-Yoke",
    description:
      "Hata önleyici (poka-yoke) fikirleri tanımlayıp, uygulanabilirlik ve etki derecesini değerlendirmeye yarar.",
    useCases: [
      "Montaj hatalarında hata önleme",
      "Yanlış parça montajını engelleme",
      "Operatör hatalarını sistemle önleme",
    ],
    outputFormat:
      "Problem–fikir–uygulanabilirlik–beklenen etki alanları ve basit önceliklendirme.",
    status: "beta",
    level: "advanced",
    href: "/quality-tools/poka-yoke",
    premium: false,
  },
];

export default function QualityToolsPage() {
  return (
    <div className="space-y-6">
      {/* Başlık ve genel açıklama */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Kalite Araçları
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-600">
            5N1K · 5 Why · 8D · Kaizen · Poka-Yoke
          </span>
        </div>

        <h1 className="text-lg font-semibold text-slate-900">
          Kalite Araçları Ana Paneli
        </h1>
        <p className="mt-2 text-xs text-slate-600">
          Problemleri tanımlama, kök neden analizi ve kalıcı aksiyon takibi için
          kullanılan temel kalite araçlarının dijital şablonlarını burada
          topluyoruz. Şu anda tüm araçlar ücretsiz (free) olarak
          planlanmaktadır; ileride gelişmiş raporlama ve PDF çıktısı özellikleri
          premium pakete taşınabilir.
        </p>
      </section>

      {/* Araç kartları */}
      <section className="grid gap-4 md:grid-cols-2">
        {QUALITY_TOOLS.map((tool) => (
          <article
            key={tool.id}
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-xs shadow-sm hover:border-slate-300 hover:shadow-md"
          >
            <div>
              <header className="mb-2 flex items-center justify-between gap-2">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {tool.label}
                    </span>
                    <h2 className="text-sm font-semibold text-slate-900">
                      {tool.name}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StatusBadge status={tool.status} />
                  {/* İleride premium açarsak burayı aktif edebiliriz */}
                  {tool.premium && (
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                      Premium
                    </span>
                  )}
                </div>
              </header>

              <p className="mb-2 text-[11px] text-slate-700">
                {tool.description}
              </p>

              <div className="mb-2">
                <p className="mb-1 text-[11px] font-semibold text-slate-800">
                  Tipik kullanım alanları:
                </p>
                <ul className="list-inside list-disc text-[11px] text-slate-700">
                  {tool.useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <p className="mb-1 text-[11px] font-semibold text-slate-800">
                  Çıktı formatı:
                </p>
                <p className="text-[11px] text-slate-700">
                  {tool.outputFormat}
                </p>
              </div>

              {/* Seviye etiketleri */}
              <div className="mt-1 flex flex-wrap gap-2">
                <LevelBadge level={tool.level} />
                {!tool.premium && (
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    Free
                  </span>
                )}
              </div>
            </div>

            <footer className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span>
                {tool.href
                  ? "Etkileşimli form ile çalışılabilir (taslak)."
                  : "Şablon ve form tasarımı üzerinde çalışılıyor."}
              </span>

              {tool.href ? (
                <Link
                  href={tool.href}
                  className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold text-white hover:bg-slate-800"
                >
                  Aracı Aç
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[10px] font-medium text-slate-500"
                >
                  Yakında
                </button>
              )}
            </footer>
          </article>
        ))}
      </section>
    </div>
  );
}

type StatusBadgeProps = {
  status: QualityToolStatus;
};

function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "beta") {
    return (
      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
        Aktif (Beta)
      </span>
    );
  }

  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
      Planlandı
    </span>
  );
}

type LevelBadgeProps = {
  level: QualityToolLevel;
};

function LevelBadge({ level }: LevelBadgeProps) {
  if (level === "basic") {
    return (
      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
        Temel seviye
      </span>
    );
  }

  return (
    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
      İleri seviye
    </span>
  );
}
