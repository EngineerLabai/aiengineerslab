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
    id: "calculators",
    title: "Hesaplayıcılar",
    subtitle: "Mühendislik hızlı hesaplar",
    description:
      "Dişli, tork, kuvvet, ısı, akış ve boyutlandırma hesaplarını saniyeler içinde çözüme ulaştır.",
    level: "intermediate",
    badge: "Güncel",
    icon: <Calculator className="h-6 w-6 text-sky-600" />,
    items: [
      { name: "Dişli ve tahrik", description: "Modül, oran, Ft/Fr/Fa, helis ve backlash hesapları." },
      { name: "Tork ve kuvvet", description: "Motor gücü, tork, eksenel/radyal yük tahminleri." },
      { name: "Isı / akış", description: "Temel ısı, enerji veya akış hesapları için kısayollar." },
    ],
  },
  {
    id: "tools",
    title: "Araçlar",
    subtitle: "Pratik mühendislik yardımcıları",
    description: "Fikstür, üretim, malzeme ve proje araçları; kontrol listeleri ve şablonlar tek yerde.",
    level: "intermediate",
    badge: "Yeni içerikler",
    icon: <Briefcase className="h-6 w-6 text-amber-600" />,
    items: [
      { name: "Fikstür ve bağlama", description: "Konumlandırma, sıkma ve taban plaka rehberleri." },
      { name: "Üretim notları", description: "Kaplama, ısıl işlem, tolerans ve süreç şablonları." },
      { name: "Proje araçları", description: "RFQ, parça takibi ve devreye alma kontrol listeleri." },
    ],
  },
  {
    id: "forum",
    title: "Forum",
    subtitle: "Topluluk ve deneyim paylaşımı",
    description:
      "Diğer mühendislerle soru-cevap, ipuçları ve alan tecrübelerini paylaşmak için topluluk alanı.",
    level: "beginner",
    badge: "Yakında",
    icon: <Layers className="h-6 w-6 text-purple-600" />,
    items: [
      { name: "Soru-cevap", description: "Uygulama sorunlarını veya hesap sorularını tartış." },
      { name: "İpucu arşivi", description: "Sahadan gelen pratik çözümler ve hızlandırıcılar." },
      { name: "Kullanıcı galerisi", description: "Kendi çözüm ve şablonlarını paylaş." },
    ],
  },
  {
    id: "ask-engineer",
    title: "Mühendise Sor",
    subtitle: "Uzmandan hızlı yanıt",
    description:
      "Kritik tasarım, malzeme veya proses sorularında uzman desteği al; mini danışmanlık ve revizyon önerileri.",
    level: "advanced",
    badge: "1-1 destek",
    icon: <Target className="h-6 w-6 text-emerald-600" />,
    items: [
      { name: "Hızlı inceleme", description: "Hesap veya çizim üzerinde kısa doğrulama." },
      { name: "Revizyon önerisi", description: "Tasarım iyileştirme ve risk azaltma tavsiyeleri." },
      { name: "Toplantı planla", description: "Kısa görüşme ile sorularını netleştir." },
    ],
  },
  {
    id: "contact",
    title: "İletişim",
    subtitle: "Geri bildirim ve destek",
    description:
      "Öneri, hata bildirimi veya iş birliği için doğrudan ulaş. İletişim kanallarını hızlıca seç.",
    level: "beginner",
    badge: "Açık",
    icon: <Sparkles className="h-6 w-6 text-sky-600" />,
    items: [
      { name: "Geri bildirim", description: "Hata, istek veya iyileştirme önerilerini ilet." },
      { name: "Destek talebi", description: "Teknik destek veya erişim sorunlarını bildir." },
      { name: "İş birliği", description: "Eğitim, pilot veya entegrasyon için iletişime geç." },
    ],
  },
];

const popularTools = [
  {
    name: "Sıkma Torku Hesaplayıcı",
    category: "Hesaplayıcılar",
    type: "Hesaplayıcı",
    isPremium: true,
  },
  {
    name: "Malzeme Karşılaştırma Aracı",
    category: "Araçlar",
    type: "Rehber",
    isPremium: false,
  },
  {
    name: "Eğilme Gerilmesi Hesaplayıcı",
    category: "Hesaplayıcılar",
    type: "Hesaplayıcı",
    isPremium: false,
  },
  {
    name: "APQP Yol Haritası Aracı",
    category: "Mühendise Sor",
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

            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[44px]">
              Hesaplayıcılar, şablonlar ve rehberlerle
              <span className="block bg-gradient-to-r from-sky-600 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                mühendislik işini hızlandır.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
              AIEngineersLab, mühendislik öğrencileri ve sahada çalışan mühendisler için tasarlandı; civata & dişli
              çözümlerinden proje yönetimi ve kalite araçlarına kadar uzanan bir bilgi ve araç kütüphanesi.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500">
                Ücretsiz araçları keşfet
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100">
                Premium'a göz at
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

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2 text-slate-800">
              <BarChart3 className="h-4 w-4 text-sky-600" />
              <span className="break-words text-sm font-semibold leading-snug">Hızlı Bakış Paneli</span>
            </div>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">Beta</span>
          </div>

          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 break-words">Civata & Dişli Araçları</span>
              <span className="shrink-0 font-semibold text-sky-700">7+ araç</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 break-words">Mekanik Hesaplayıcılar</span>
              <span className="shrink-0 font-semibold text-sky-700">5+ araç</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 break-words">Proje & Kalite şablonları</span>
              <span className="shrink-0 font-semibold text-sky-700">10+ şablon</span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between gap-2 text-[12px] text-slate-800">
              <span>AI asistan desteği</span>
              <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                Yakında
              </span>
            </div>
            <p className="mt-2 text-[12px] text-slate-600">
              Hesap sonuçlarını yorumlayan ve projene göre öneri veren yapay zeka asistanının entegrasyonu planlanıyor.
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
              className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="break-words font-semibold text-slate-900">{tool.name}</span>
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
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
            </div>
          ))}
        </div>
      </section>

      {/* KATEGORİLER */}
      <section id="categories" className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900">Tüm kategoriler</h2>
        <p className="text-sm text-slate-600">
          Ücretsiz olarak göz atabilir, detaylı hesaplayıcılar ve şablonlar için Premium'a göz at yapabilirsin.
        </p>

        <div className="mt-4 grid gap-5 lg:grid-cols-1 xl:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words text-base font-semibold leading-snug text-slate-900">{cat.title}</h3>
                    <p className="break-words text-[13px] leading-relaxed text-slate-600">{cat.subtitle}</p>
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

              <p className="mt-3 break-words text-sm leading-relaxed text-slate-700">{cat.description}</p>

              <div className="mt-3 space-y-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex-1 min-w-0 break-words text-sm font-semibold leading-snug text-slate-900">
                        {item.name}
                      </span>
                      {item.isPremium && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="mt-1 break-words text-[12px] leading-relaxed text-slate-600">
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
      <section
        id="pricing"
        className="grid gap-6 md:items-start lg:grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      >
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">Ücretsiz başla, hazır olunca yükselt</h2>
          <p className="text-sm text-slate-600">
            AIEngineersLab, önce ücretsiz araçlarla seni tanıştırır. Premium ile tüm şablon ve hesaplayıcılara
            erişirsin.
          </p>

          <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="font-semibold">Ücretsiz paket</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-[13px] text-slate-600">
                <li>- Civata & dişli temel rehberler</li>
                <li>- Bazı mekanik hesaplayıcılar</li>
                <li>- Kariyer merkezi temel içerikleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="font-semibold text-amber-900">Premium</span>
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
            Şu an odak, içerik ve araç kütüphanesini olgunlaştırmak. Fiyat ve paket yapısı netleştiğinde, mevcut
            kullanıcılara erken erişim ve indirim tanımlanacak.
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
                mühendislik öğrencileri, yeni mezunlar ve sahada çalışan proje / kalite / tasarım mühendisleri
              </span>{" "}
              için hazırlandı. Teorik bilgiyi; otomotiv, ağır vasıta ve kompresör dünyasından gerçek örneklerle
              birleştirir.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p>
              Hedef; internette dağınık halde bulunan bilgileri tek yerde toplamak değil,{" "}
              <span className="font-semibold text-slate-900">
                gerçek projelerde kullanılabilir, güvenilir ve sindirilmiş içerikler
              </span>{" "}
              sunmaktır. Zamanla hesaplayıcılar, PDF rehberler, MSA/SPC şablonları ve daha fazlası eklenecek.
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
