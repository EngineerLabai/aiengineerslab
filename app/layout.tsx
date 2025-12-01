// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mühendislik Bilgi Platformu",
  description:
    "Makine / otomotiv mühendisleri için cıvata, diş, tork, malzeme, ısıl işlem ve mekanik hesaplayıcı sitesi.",
};

// Sol menüde görünecek linkler
type SidebarItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const sidebarLinks: SidebarItem[] = [
  { label: "Genel Bakış", href: "/" },
  {
    label: "Cıvata · Diş · Tork Merkezi",
    children: [
      { label: "Merkez Ana Sayfa", href: "/tools/bolt-database" },
      { label: "Cıvata Boyut ve Temel Değer Hesaplayıcı", href: "/tools/bolt-calculator" },
    ],
  },
  {
    label: "Malzeme · Isıl İşlem · Kaplama Merkezi",
    children: [
      { label: "Malzeme Kartları", href: "/tools/material-cards" },
      { label: "Isıl İşlem Rehberi", href: "/tools/heat-treatment" },
      { label: "Kaplama Rehberi", href: "/tools/coating-guide" },
      { label: "Sızdırmazlık ve Contalar Rehberi", href: "/tools/sealing-guide" },
    ],
  },
  {
    label: "Mekanik Hesaplayıcılar",
    href: "/tools",
  },
  {
    label: "Proje Mühendisleri Alanı",
    href: "/project-hub", // ÖNEMLİ: /project-tools değil
  },
  {
    label: "Kalite Araçları",
    href: "/quality-tools",
  },
  {
    label: "Kalıp / Fikstür Araçları",
    href: "/fixture-tools",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-50 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          {/* Üst Navbar */}
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
              {/* Logo + Başlık */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">AI Engineers Lab</span>
                  <span className="text-xs text-slate-500">
                    Cıvata, diş, tork, malzeme ve hesaplayıcı merkezi
                  </span>
                </div>
              </div>

              {/* Sağ taraf: Giriş / Premium (şimdilik statik) */}
              <div className="flex items-center gap-2 text-xs">
                <button className="rounded-full border border-slate-300 px-3 py-1.5 font-medium hover:bg-slate-100">
                  Giriş Yap
                </button>
                <button className="rounded-full bg-slate-900 px-3 py-1.5 font-semibold text-white hover:bg-slate-800">
                  Premium Ol
                </button>
              </div>
            </div>
          </header>

          {/* Ana içerik */}
          <main className="flex-1">
            <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6">
              {/* Sol sidebar */}
              <aside className="w-64 shrink-0">
                <nav className="sticky top-4 space-y-1 text-xs">
                  {sidebarLinks.map((item) =>
                    item.children ? (
                      <SidebarGroup key={item.label} item={item} />
                    ) : (
                      item.href && (
                        <SidebarLink key={item.href} label={item.label} href={item.href} />
                      )
                    ),
                  )}
                </nav>
              </aside>

              {/* Orta alan: sayfa içeriği */}
              <section className="flex-1">{children}</section>

              {/* Sağ panel: Mühendise Sor + Premium kutusu */}
              <aside className="hidden w-72 shrink-0 xl:block">
                <div className="sticky top-4 space-y-4 text-xs">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h2 className="mb-1 text-sm font-semibold">Mühendise Sor</h2>
                    <p className="mb-3 text-[11px] text-slate-600">
                      Cıvata, tork, malzeme veya fikstür tasarımında takıldığın bir yer varsa,
                      teknik destek talebi oluştur.
                    </p>
                    <button className="w-full rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500">
                      Teknik Destek Talebi Oluştur
                    </button>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 shadow-sm">
                    <h2 className="mb-1 text-sm font-semibold">Premium Üyelik Avantajları</h2>
                    <ul className="list-disc space-y-1 pl-4 text-[11px]">
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

type SidebarLinkProps = {
  label: string;
  href: string;
};

function SidebarLink({ label, href }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className="block w-full rounded-full px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-100"
    >
      {label}
    </Link>
  );
}

function SidebarGroup({ item }: { item: SidebarItem }) {
  return (
    <details className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-slate-800">
      <summary className="cursor-pointer text-xs font-semibold text-slate-800">
        {item.label}
      </summary>
      <div className="mt-2 space-y-1">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-full px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
