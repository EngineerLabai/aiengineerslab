// app/fixture-tools/page.tsx
import Link from "next/link";

type FixtureToolStatus = "beta" | "planned";

type FixtureTool = {
  id: string;
  name: string;
  label: string;
  description: string;
  useCases: string[];
  status: FixtureToolStatus;
  href?: string;
};

const FIXTURE_TOOLS: FixtureTool[] = [
  {
    id: "base-plate",
    name: "Kalıp / Fikstür Taban Plakası Notları",
    label: "Taban Plaka",
    description:
      "Fikstür taban plakası kalınlığı, sertliği ve bağlama noktaları için temel mühendislik notları ve checklist.",
    useCases: [
      "Yeni fikstürde taban plaka kalınlığını seçme",
      "Bağlama cıvatalarının yerleşimini kabaca kontrol etme",
      "Makine tablası oluk / T-slot uyumluluğu notları",
    ],
    status: "beta",
    href: "/fixture-tools/base-plate",
  },
  {
    id: "clamping",
    name: "Sıkma / Bağlama Elemanları Planlama",
    label: "Clamping",
    description:
      "Parçanın nereden ve kaç noktadan sıkılacağını, reaksiyon noktalarını ve emniyet katsayısını planlamak için basit bir şablon.",
    useCases: ["Kıskaç (clamp) sayısını ve yerini belirleme", "Aşırı deformasyon riskini azaltma", "Kuvvet yolunu (force path) kabaca düşünme"],
    status: "beta",
    href: "/fixture-tools/clamping",
  },
  {
    id: "locating",
    name: "Konumlandırma Pimi & Referanslama Şeması",
    label: "Referanslama",
    description:
      "3-2-1 prensibine göre parçanın nasıl konumlandırılacağını ve referans yüzeylerini tanımlamak için dijital kart.",
    useCases: [
      "Yeni fikstürde referans yüzeylerini netleştirme",
      "3-2-1 prensibine uygun pim ve dayama yerleşimi",
      "Montaj tekrarlanabilirliğini artırma",
    ],
    status: "beta",
    href: "/fixture-tools/locating",
  },
];

export default function FixtureToolsPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_24%)]" />
        <div className="relative space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] text-sky-700 md:text-xs">
            <span className="font-semibold">Kalıp / Fikstür Araçları</span>
            <span className="hidden text-slate-500 sm:inline">Taban plaka · Sıkma · Referanslama</span>
          </div>
          <h1 className="text-balance text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
            Fikstür ve kalıp tasarımında sık kullanılan notlar ve şablonlar
          </h1>
          <p className="text-sm leading-relaxed text-slate-700">
            Taban plaka boyutlandırma notları, sıkma / bağlama planı ve 3-2-1 prensibine göre referanslama
            şemaları. Şimdilik hepsi free; ileride PDF/Excel çıktıları ve gelişmiş hesaplayıcılar premium’a
            taşınabilir.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {FIXTURE_TOOLS.map((tool) => (
          <article
            key={tool.id}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 text-xs shadow-sm hover:border-slate-300 hover:shadow-md"
          >
            <div className="space-y-2">
              <header className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
                    {tool.label}
                  </span>
                  <h2 className="text-sm font-semibold leading-snug text-slate-900 break-words">{tool.name}</h2>
                </div>
                <FixtureStatusBadge status={tool.status} />
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
            </div>

            <footer className="mt-3 flex items-center justify-between gap-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Free şablon</span>
                {tool.href && (
                  <Link
                    href={tool.href}
                    className="rounded-full bg-sky-600 px-3 py-1 font-semibold text-white hover:bg-sky-500"
                  >
                    Modülü Aç
                  </Link>
                )}
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5">
                {tool.status === "beta" ? "Etkileşimli form açık" : "Yakında etkileşimli form"}
              </span>
            </footer>
          </article>
        ))}
      </section>
    </div>
  );
}

function FixtureStatusBadge({ status }: { status: FixtureToolStatus }) {
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
