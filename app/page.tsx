// app/page.tsx
import { ReactNode } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const ArrowUpRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 17 17 7M10 7h7v7" />
  </svg>
);

const BarChart3 = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="10" width="4" height="11" rx="1" />
    <rect x="10" y="6" width="4" height="15" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

const Briefcase = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 7h16a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1Z" />
    <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M3 12h18" />
  </svg>
);

const Calculator = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 7h6" />
    <path d="M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01M9 17h6" />
  </svg>
);

const CheckCircle2 = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
  </svg>
);

const Gauge = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 15 15 9" />
    <path d="M12 21a9 9 0 1 1 9-9h-3" />
  </svg>
);

const Layers = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3 9 5-9 5-9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);

const Sparkles = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v5m0 8v5M5 5l3.5 3.5M15.5 15.5 19 19M3 12h5m8 0h5" />
  </svg>
);

const Target = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const Wrench = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 6a4 4 0 0 0-5.2 5.8l-4.5 4.5a2 2 0 1 0 2.8 2.8l4.5-4.5A4 4 0 0 0 18 9.5l2-2-3-3Z" />
  </svg>
);

type Category = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  level: "beginner" | "intermediate" | "advanced";
  items: {
    name: string;
    description: string;
    isPremium?: boolean;
  }[];
  icon: ReactNode;
};

const categories: Category[] = [
  {
    id: "bolt-thread",
    title: "Cıvata · Diş · Tork Merkezi",
    subtitle: "Bağlantı Elemanları Mühendisliği",
    description:
      "Metrik, UNC/UNF, diş toleransları, sıkma torkları ve ön yük hesapları. Tasarımdan montaja kadar bağlantı elemanı süreci tek yerde.",
    level: "intermediate",
    badge: "Yeni içerikler ekleniyor",
    icon: <Wrench className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "Diş Standartları Kütüphanesi",
        description:
          "Metrik, UNC/UNF, Whitworth ve özel diş formlarının hızlı karşılaştırması ve seçim tablosu.",
      },
      {
        name: "Sıkma Torku Hesaplayıcı",
        description:
          "Sürtünme katsayısı, yağlama durumu ve cıvata kalitesine göre önerilen tork hesapları.",
        isPremium: true,
      },
      {
        name: "Cıvata Seçim Asistanı",
        description:
          "Yük, emniyet katsayısı ve yer kısıtlarına göre cıvata boyut ve kalite önerisi.",
        isPremium: true,
      },
    ],
  },
  {
    id: "material-heat",
    title: "Malzeme · Isıl İşlem · Kaplama Merkezi",
    subtitle: "Doğru malzeme, doğru proses",
    description:
      "Çelik, alüminyum ve döküm malzemelerin mekanik özellikleri, ısıl işlem kombinasyonları ve yüzey kaplama rehberi.",
    level: "intermediate",
    icon: <Layers className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "Malzeme Karşılaştırma Aracı",
        description:
          "CK75 - CK67, 50CrV4, EN-AW 5754, 6013 gibi malzemeleri mekanik özelliklere göre kıyasla.",
      },
      {
        name: "Isıl İşlem Sonrası Sertlik Tahmini",
        description:
          "Çöstenitleme, temperleme ve süneklik gereksinimlerine göre hedef sertlik aralıkları.",
        isPremium: true,
      },
      {
        name: "Kaplama Seçim Rehberi",
        description:
          "Korozyon, sürtünme, maliyet ve proses kabiliyetine göre uygun kaplama önerileri (Zn, ZnNi, fosfat vb.).",
        isPremium: true,
      },
    ],
  },
  {
    id: "mechanical-calcs",
    title: "Mekanik Hesaplayıcılar",
    subtitle: "Eğilme · Torsiyon · CC hesapları",
    description:
      "Günlük tasarım ve doğrulama işlerini hızlandıracak, sahada da ofiste de kullanabileceğin hesaplama araçları.",
    level: "beginner",
    icon: <Calculator className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "Eğilme Gerilmesi Hesaplayıcı",
        description:
          "Basit kirişler için eğilme momenti, gerilme ve emniyet katsayısı hesapları.",
      },
      {
        name: "Torsiyon Hesaplayıcı",
        description:
          "Mil çapı, tork ve malzeme dayanımına göre güvenli tasarım kontrolü.",
      },
      {
        name: "Hacimsel CC Hesaplayıcı",
        description: "Kompresör ve pnömatik elemanlar için cc hesabı ve optimizasyonu.",
        isPremium: true,
      },
    ],
  },
  {
    id: "project-engineering",
    title: "Proje Mühendisleri Alanı",
    subtitle: "APQP · PPAP · FMEA · Kaizen",
    description:
      "Seri devreye alma, müşteri projeleri ve fabrika içi iyileştirme çalışmalarını sistematik yönetmek için hazır şablonlar.",
    level: "advanced",
    badge: "Pro paket önerilir",
    icon: <Target className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "APQP Yol Haritası Aracı",
        description: "Adım adım proje fazları, sorumlu matrisleri ve teslimat listeleri.",
        isPremium: true,
      },
      {
        name: "FMEA Şablonları",
        description: "Tasarım ve proses FMEA için pratik, otomotiv uyumlu şablon seti.",
        isPremium: true,
      },
      {
        name: "Kaizen Takip Panosu",
        description: "İyileştirme fikirlerini topla, puanla ve hayata geçirme sürecini izle.",
        isPremium: true,
      },
    ],
  },
  {
    id: "quality-tools",
    title: "Kalite Araçları",
    subtitle: "Problem çözme ve kök neden analizi",
    description:
      "5N1K, 5 Why, Ishikawa, 8D ve daha fazlası için hazır template ve örneklerle yalın problem çözme.",
    level: "beginner",
    icon: <Gauge className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "8D Rapor Asistanı",
        description: "Müşteriye gönderilecek 8D raporlarını adım adım doldurmanı sağlar.",
        isPremium: true,
      },
      {
        name: "5N1K & 5 Why Panosu",
        description: "Takım çalışmaların için dijital beyaz tahta şablonları.",
      },
      {
        name: "Kontrol Planı Başlangıç Seti",
        description: "Seri üretim projeleri için hızlı kontrol planı oluşturma şablonları.",
      },
    ],
  },
  {
    id: "tooling-fixtures",
    title: "Kalıp · Fikstür Araçları",
    subtitle: "Sac kalıp ve fikstür tasarımına giriş",
    description:
      "EN-AW 5754, 6013 gibi malzemelerle çalışan sac kalıplar ve montaj fikstürleri için pratik rehberler.",
    level: "intermediate",
    icon: <Layers className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "Sac Kalıp Malzeme Rehberi",
        description: "İşlev, maliyet ve proses kabiliyetine göre sac malzeme seçimi.",
      },
      {
        name: "Fikstür Tasarım Kontrol Listesi",
        description: "İş güvenliği, ergonomi ve tekrarlanabilirlik için olmazsa olmaz maddeler.",
      },
      {
        name: "Tolerans & Rulman Yatak Rehberi",
        description: "Rulman yatak toleransları ve yüzey kalitesi gereksinimlerine görsel açıklamalar.",
        isPremium: true,
      },
    ],
  },
  {
    id: "career-center",
    title: "Mühendislik Kariyer Merkezi",
    subtitle: "Öğrenciden proje mühendisine giden yol",
    description:
      "CV, LinkedIn, portföy ve proje önerileriyle, öğrenciden otomotiv ve ağır vasıta dünyasına hazırlayan bir kariyer alanı.",
    level: "beginner",
    badge: "Öğrenciler için",
    icon: <Briefcase className="h-6 w-6 text-sky-600" />,
    items: [
      {
        name: "Yetkinlik Yol Haritaları",
        description: "Otomotiv, ağır vasıta ve Ar-Ge kariyer yolları için öğrenme haritaları.",
      },
      {
        name: "CV & LinkedIn Şablonları",
        description: "Mühendislik odaklı, ATS uyumlu CV ve profil yazım önerileri.",
        isPremium: true,
      },
      {
        name: "Bitirme & YL Tez Fikir Havuzu",
        description: "Endüstriye dokunan tez ve proje konu önerileri (F1, süspansiyon, kompresör vb.).",
        isPremium: true,
      },
    ],
  },
];

const popularTools = [
  {
    name: "Sıkma Torku Hesaplayıcı",
    category: "Cıvata · Diş · Tork Merkezi",
    type: "Hesaplayıcı",
    isPremium: true,
  },
  {
    name: "Malzeme Karşılaştırma Aracı",
    category: "Malzeme · Isıl İşlem · Kaplama",
    type: "Rehber",
    isPremium: false,
  },
  {
    name: "Eğilme Gerilmesi Hesaplayıcı",
    category: "Mekanik Hesaplayıcılar",
    type: "Hesaplayıcı",
    isPremium: false,
  },
  {
    name: "APQP Yol Haritası Aracı",
    category: "Proje Mühendisleri",
    type: "Pro Aracı",
    isPremium: true,
  },
];

function levelLabel(level: Category["level"]) {
  switch (level) {
    case "beginner":
      return "Seviye: Başlangıç";
    case "intermediate":
      return "Seviye: Orta";
    case "advanced":
      return "Seviye: İleri";
  }
}

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_24%)]" />
          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] text-sky-700 md:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Otomotiv ve ağır vasıta odaklı mühendislik platformu</span>
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Hesaplayıcılar, şablonlar ve rehberlerle
              <span className="block bg-gradient-to-r from-sky-600 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                mühendislik işini hızlandır.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
              AIEngineersLab, mühendislik öğrencileri ve sahada çalışan mühendisler için tasarlandı;
              cıvata & diş çözümlerinden proje yönetimi ve kalite araçlarına kadar uzanan bir bilgi ve
              araç kütüphanesi.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500">
                Ücretsiz araçları keşfet
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100">
                Premium’a göz at
              </button>
            </div>

            <div className="mt-6 grid gap-3 text-xs text-slate-600 md:grid-cols-2 md:text-[13px]">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Gerçek otomotiv & ağır vasıta projelerinden beslenen içerikler</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Öğrenciler için anlaşılır, profesyoneller için yeterince derin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ taraf mini özet kartı */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-slate-800">
              <BarChart3 className="h-4 w-4 text-sky-600" />
              <span className="text-sm font-semibold">Hızlı Bakış Paneli</span>
            </div>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              Beta
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>Cıvata & Diş Araçları</span>
              <span className="font-semibold text-sky-700">7+ araç</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mekanik Hesaplayıcılar</span>
              <span className="font-semibold text-sky-700">5+ araç</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Proje & Kalite Şablonları</span>
              <span className="font-semibold text-sky-700">10+ şablon</span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between text-[12px] text-slate-800">
              <span>AI asistan desteği</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                Yakında
              </span>
            </div>
            <p className="mt-2 text-[12px] text-slate-600">
              Hesap sonuçlarını yorumlayan ve projene göre öneri veren yapay zeka asistanı entegrasyonu
              planlanıyor.
            </p>
          </div>
        </div>
      </section>

      {/* POPÜLER ARAÇLAR */}
      <section id="popular" className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-base font-semibold text-slate-900">Popüler araçlar</h2>
          <a href="#categories" className="text-sm font-semibold text-sky-700 hover:text-sky-600">
            Tüm kategorileri gör
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
          {popularTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">{tool.name}</span>
                  {tool.isPremium && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                      Premium
                    </span>
                  )}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-slate-600">
                  <span>{tool.category}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{tool.type}</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </div>
      </section>

      {/* KATEGORİLER */}
      <section id="categories" className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900">Tüm kategoriler</h2>
        <p className="text-sm text-slate-600">
          Ücretsiz olarak göz atabilir, detaylı hesaplayıcılar ve şablonlar için Premium’a geçiş
          yapabilirsin.
        </p>

        <div className="mt-4 grid gap-5 lg:grid-cols-1 xl:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-slate-900 break-words">
                      {cat.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-600 break-words">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    {levelLabel(cat.level)}
                  </span>
                  {cat.badge && (
                    <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-700">
                      {cat.badge}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-700 break-words">
                {cat.description}
              </p>

              <div className="mt-3 space-y-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-900 break-words">{item.name}</span>
                      {item.isPremium && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-600 break-words">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING / PREMIUM */}
        <section id="pricing" className="grid gap-6 lg:grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">Ücretsiz başla, hazır olunca yükselt</h2>
          <p className="text-sm text-slate-600">
            AIEngineersLab, önce ücretsiz araçlarla seni tanıştırır. Premium paketle, proje ve kalite
            tarafındaki tüm şablon ve hesaplayıcılara erişirsin.
          </p>

          <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="font-semibold">Ücretsiz paket</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-[13px] text-slate-600">
                <li>- Cıvata & diş temel rehberler</li>
                <li>- Bazı mekanik hesaplayıcılar</li>
                <li>- Kariyer merkezi temel içerikleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="font-semibold text-amber-900">Premium paket</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-[13px] text-amber-900/80">
                <li>- Tüm hesaplayıcı ve şablonlara tam erişim</li>
                <li>- Proje & kalite alanında ek araçlar</li>
                <li>- Yeni araçlara öncelikli erişim</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-[12px] uppercase tracking-wide text-slate-500">Başlangıç fiyatı</span>
              <div className="mt-1 flex items-end gap-1">
                <span className="text-2xl font-semibold text-slate-900">Yakında</span>
              </div>
            </div>
            <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              Henüz satışta değil
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Şu an odak, içerik ve araç kütüphanesini olgunlaştırmak. Fiyat ve paket yapısı netleştiğinde,
            mevcut kullanıcılara erken erişim ve indirim tanımlanacak.
          </p>
        </div>
      </section>

      {/* HAKKINDA / FOOTER */}
        <section id="about" className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Bu platform kimin için?</h2>
            <p className="mt-2 text-sm text-slate-700">
              AIEngineersLab;{" "}
              <span className="font-semibold">
                mühendislik öğrencileri, yeni mezunlar ve sahada çalışan proje / kalite / tasarım
                mühendisleri
              </span>{" "}
              için hazırlandı. Teorik bilgiyi; otomotiv, ağır vasıta ve kompresör dünyasından gerçek
              örneklerle birleştirir.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p>
              Hedef; internette dağınık halde bulunan bilgileri tek yerde toplamak değil,{" "}
              <span className="font-semibold text-slate-900">
                gerçek projelerde kullanılabilir, güvenilir ve sindirilmiş içerikler
              </span>{" "}
              sunmaktır. Zamanla hesaplayıcılar, PDF rehberler, MSA/SPC şablonları ve daha fazlası
              eklenecek.
            </p>
          </div>
        </div>

        <footer className="flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} AIEngineersLab. Tüm hakları saklıdır.</div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-slate-900">
              İletişim
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a href="#" className="hover:text-slate-900">
              Gizlilik
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a href="#" className="hover:text-slate-900">
              Kullanım Koşulları
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
