// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mühendislik Bilgi Platformu",
  description:
    "Makine ve otomotiv mühendisleri için cıvata, diş, tork, malzeme, ısıl işlem ve mekanik hesaplayıcı merkezi.",
};

type NavSection = {
  label: string;
  description: string;
  links: { label: string; href: string; badge?: string }[];
};

const navSections: NavSection[] = [
  {
    label: "Hesaplayıcılar",
    description: "Dişli, tork, kuvvet ve mekanik hesap araçları.",
    links: [
      { label: "Dişli hesaplayıcıları", href: "/tools/gear-design/calculators", badge: "Yeni" },
      { label: "Mekanik hesaplamalar", href: "/tools" },
      { label: "Tork / Güç", href: "/tools/torque-power" },
    ],
  },
  {
    label: "Araçlar",
    description: "Şablon, rehber ve proje araçları.",
    links: [
      { label: "Proje alanı", href: "/project-hub", badge: "Güncel" },
      { label: "Kalite araçları", href: "/quality-tools" },
      { label: "Fikstür & aparat", href: "/fixture-tools" },
    ],
  },
  {
    label: "Forum",
    description: "Topluluk tartışmaları ve paylaşımlar.",
    links: [
      { label: "Topluluk", href: "#" },
      { label: "Soru-cevap", href: "#" },
    ],
  },
  {
    label: "Mühendise Sor",
    description: "Hızlı teknik destek ve mini danışmanlık.",
    links: [
      { label: "Hızlı inceleme", href: "#" },
      { label: "Toplantı planla", href: "#" },
    ],
  },
  {
    label: "İletişim",
    description: "Geri bildirim ve destek kanalları.",
    links: [
      { label: "İletişim formu", href: "#" },
      { label: "Geri bildirim", href: "#" },
    ],
  },
];

type SidebarSection = {
  label: string;
  links: { label: string; href: string }[];
};

const sidebarSections: SidebarSection[] = [
  {
    label: "Genel",
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Hesaplayıcılar", href: "/tools/gear-design/calculators" },
    ],
  },
  {
    label: "Hesaplayıcılar",
    links: [
      { label: "Dişli hesaplamaları", href: "/tools/gear-design/calculators" },
      { label: "Mekanik Hesaplamalar", href: "/tools" },
    ],
  },
  {
    label: "Araçlar",
    links: [
      { label: "Proje Alanı", href: "/project-hub" },
      { label: "Kalite Araçları", href: "/quality-tools" },
      { label: "Fikstür Araçları", href: "/fixture-tools" },
    ],
  },
  {
    label: "Forum",
    links: [{ label: "Topluluk", href: "#" }],
  },
  {
    label: "Mühendise Sor",
    links: [{ label: "Teknik destek", href: "#" }],
  },
  {
    label: "İletişim",
    links: [{ label: "Bize ulaşın", href: "#" }],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${raleway.variable} ${jetBrainsMono.variable} antialiased bg-slate-50 text-slate-900`}>
        <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(100,116,139,0.05),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.05),transparent_25%)]">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sm font-black text-white shadow-sm">
                  AI
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">AI Engineers Lab</span>
                  <span className="text-sm font-semibold text-slate-900">Açık ve minimal mühendislik platformu</span>
                </div>
              </Link>

              <nav className="hidden items-center gap-1 lg:flex">
                {navSections.map((section) => (
                  <MegaMenuItem key={section.label} section={section} />
                ))}
              </nav>

              <div className="flex items-center gap-2 text-xs">
                <Link
                  className="rounded-full border border-slate-300 px-3 py-1.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                  href="#"
                >
                  Giriş Yap
                </Link>
                <Link
                  className="rounded-full bg-sky-600 px-3 py-1.5 font-semibold text-white shadow-sm transition hover:bg-sky-500"
                  href="#"
                >
                  Premium
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-100 bg-white/80 px-4 py-2 lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
                {navSections.slice(0, 3).map((section) => (
                  <Link
                    key={section.label}
                    href={section.links[0]?.href ?? "#"}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row">
              <aside className="lg:w-64 lg:shrink-0">
                <div className="sticky top-4 space-y-3 text-xs">
                  {sidebarSections.map((section) => (
                    <SidebarSectionCard key={section.label} section={section} />
                  ))}
                </div>
              </aside>

              <section className="flex-1">{children}</section>

              <aside className="hidden w-72 shrink-0 xl:block">
                <div className="sticky top-4 space-y-4 text-xs">
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">Mühendise Sor</h2>
                    <p className="mb-3 text-[11px] leading-relaxed text-slate-600">
                      Cıvata, tork, malzeme veya fikstür tasarımında takıldığın noktalar için teknik destek iste.
                    </p>
                    <button className="w-full rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-500">
                      Teknik destek talebi oluştur
                    </button>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">Premium Üyelik</h2>
                    <ul className="list-disc space-y-1 pl-4 text-[11px] text-slate-600">
                      <li>Detaylı tork ve diş tabloları</li>
                      <li>Gelişmiş mekanik hesaplayıcılar</li>
                      <li>Malzeme &amp; kaplama öneri kartları</li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

function MegaMenuItem({ section }: { section: NavSection }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
        {section.label}
        <span className="text-[10px] text-slate-500">v</span>
      </button>
      <div className="pointer-events-none absolute left-0 top-full z-30 w-[360px] translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur">
          <p className="mb-3 text-[11px] leading-relaxed text-slate-600">{section.description}</p>
          <div className="grid gap-1">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <span>{link.label}</span>
                {link.badge ? (
                  <span className="rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                    {link.badge}
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">&gt;</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSectionCard({ section }: { section: SidebarSection }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur">
      <h3 className="mb-2 text-[12px] font-semibold text-slate-800">{section.label}</h3>
      <div className="space-y-1">
        {section.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-full px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
