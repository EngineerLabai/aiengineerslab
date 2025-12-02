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
  href?: string;
  premium?: boolean;
};

const QUALITY_TOOLS: QualityTool[] = [
  {
    id: "5n1k",
    name: "5N1K Problem Tanımı",
    label: "5N1K",
    description:
      "Problemi netleştirmek için Ne, Nerede, Ne zaman, Nasıl, Neden ve Kim sorularını sistematik şekilde doldurmayı sağlar.",
    useCases: ["Kalite problemi ilk tanımlama", "Müşteri şikayeti analizi öncesi", "8D ve kök neden analizine giriş"],
    outputFormat: "Doldurulabilir 5N1K formu (metin alanları) + PDF/Word olarak dışa aktarma (ileride).",
    status: "beta",
    level: "basic",
    href: "/quality-tools/5n1k",
  },
  {
    id: "5why",
    name: "5 Why (5 Neden) Analizi",
    label: "5 Why",
    description:
      "Bir problemin kök nedenine ulaşmak için ardışık “Neden?” sorularının yapılandırılmış şekilde sorulmasını sağlar.",
    useCases: ["Tekrarlayan arıza analizi", "Müşteri şikayetinde kök neden arayışı", "İç kalite uygunsuzlukları"],
    outputFormat: "Adım adım “Neden?” zinciri, kök neden tanımı ve aksiyon listesi taslağı.",
    status: "planned",
    level: "basic",
    href: "/quality-tools/5why",
  },
  {
    id: "8d",
    name: "8D Rapor İskeleti",
    label: "8D",
    description:
      "8D metodolojisine göre ekip, problem tanımı, kök neden ve kalıcı aksiyonları içeren rapor iskeleti sunar.",
    useCases: ["Otomotiv müşteri şikayetleri", "Ciddi iç uygunsuzluklar", "Kalıcı aksiyon gerektiren problemler"],
    outputFormat: "D1-D8 adımlarını içeren form iskeleti, her adım için giriş alanları; ileride PDF çıktısı.",
    status: "beta",
    level: "advanced",
    href: "/quality-tools/8d",
  },
  {
    id: "kaizen",
    name: "Kaizen / Sürekli İyileştirme Kartı",
    label: "Kaizen",
    description:
      "Küçük ama sürekli iyileştirmeleri takip etmek için problem-hedef-aksiyon-sonuç yapısında kayıt tutmanı sağlar.",
    useCases: ["Atölye/hat iyileştirmeleri", "Verimlilik ve ergonomi iyileştirmeleri", "Kayıp azaltma çalışmaları"],
    outputFormat: "Öncesi/sonrası fotoğraf alanları (ileride), aksiyon listesi ve kazanım özet alanı.",
    status: "beta",
    level: "basic",
    href: "/quality-tools/kaizen",
  },
  {
    id: "poka-yoke",
    name: "Poka-Yoke Fikir Kartı",
    label: "Poka-Yoke",
    description: "Hata önleyici (poka-yoke) fikirleri tanımlayıp uygulanabilirlik ve etki derecesini değerlendirir.",
    useCases: ["Montaj hatalarında hata önleme", "Yanlış parça montajının engellenmesi", "Operatör hatalarını sistemle önleme"],
    outputFormat: "Problem-fikir-uygulanabilirlik-beklenen etki alanları ve basit önceliklendirme.",
    status: "beta",
    level: "advanced",
    href: "/quality-tools/poka-yoke",
  },
];

export default function QualityToolsPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_24%)]" />
        <div className="relative space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] text-sky-700 md:text-xs">
            <span className="font-semibold">Kalite araçları: 5N1K · 5 Why · 8D · Kaizen · Poka-Yoke</span>
          </div>
          <h1 className="text-balance text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
            Problem tanımı, kök neden analizi ve kalıcı aksiyonlar için dijital şablonlar
          </h1>
          <p className="text-sm leading-relaxed text-slate-700">
            Problemleri tanımlama, kök neden analizi ve kalıcı aksiyon takibi için kullandığın temel kalite
            araçlarını burada topluyoruz. Şu anda tüm araçlar ücretsiz; ileride gelişmiş raporlama ve PDF
            çıktıları premium’a taşınabilir.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {QUALITY_TOOLS.map((tool) => (
          <article
            key={tool.id}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 text-xs shadow-sm hover:border-slate-300 hover:shadow-md"
          >
            <div className="space-y-2">
              <header className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="inline-flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
                      {tool.label}
                    </span>
                    <h2 className="text-sm font-semibold leading-snug text-slate-900 break-words">{tool.name}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge status={tool.status} />
                    {tool.premium && (
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                        Premium
                      </span>
                    )}
                  </div>
                </div>
              </header>

              <p className="text-[11px] leading-relaxed text-slate-700 break-words">{tool.description}</p>

              <div>
                <p className="mb-1 text-[11px] font-semibold text-slate-800">Tipik kullanım alanları:</p>
                <ul className="list-inside list-disc space-y-1 text-[11px] text-slate-700">
                  {tool.useCases.map((u) => (
                    <li key={u} className="break-words">
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-1 text-[11px] font-semibold text-slate-800">Çıktı formatı:</p>
                <p className="text-[11px] leading-relaxed text-slate-700 break-words">{tool.outputFormat}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <LevelBadge level={tool.level} />
                {!tool.premium && (
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    Free
                  </span>
                )}
              </div>
            </div>

            <footer className="mt-3 flex items-center justify-between gap-2 text-[11px] text-slate-500">
              <span className="min-w-0 break-words">
                {tool.href
                  ? "Etkileşimli form ile çalışılabilir (taslak)."
                  : "Şablon ve form tasarımı üzerinde çalışılıyor."}
              </span>

              {tool.href ? (
                <Link
                  href={tool.href}
                  className="rounded-full bg-sky-600 px-3 py-1 text-[10px] font-semibold text-white hover:bg-sky-500"
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

function StatusBadge({ status }: { status: QualityToolStatus }) {
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

function LevelBadge({ level }: { level: QualityToolLevel }) {
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
