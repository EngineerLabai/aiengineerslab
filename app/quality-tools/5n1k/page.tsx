// app/quality-tools/5n1k/page.tsx
"use client";

import { useState, ChangeEvent } from "react";

type FiveN1KForm = {
  what: string;   // Ne?
  where: string;  // Nerede?
  when: string;   // Ne zaman?
  who: string;    // Kim?
  why: string;    // Neden? (ilk yorum)
  how: string;    // Nasıl?
};

const INITIAL_FORM: FiveN1KForm = {
  what: "",
  where: "",
  when: "",
  who: "",
  why: "",
  how: "",
};

export default function FiveN1KPage() {
  const [form, setForm] = useState<FiveN1KForm>(INITIAL_FORM);

  function handleChange(
    key: keyof FiveN1KForm,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  const isEmpty = Object.values(form).every((v) => !v.trim());

  return (
    <div className="space-y-6">
      {/* Başlık ve açıklama */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Kalite Aracı
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-600">
            5N1K · Problem Tanımlama
          </span>
        </div>

        <h1 className="text-lg font-semibold text-slate-900">
          5N1K – Problem Tanımlama Formu
        </h1>
        <p className="mt-2 text-xs text-slate-600">
          Kalite problemi, müşteri şikayeti veya üretim hattı uygunsuzluğunu
          netleştirmek için 5N1K sorularını doldur. Aşağıdaki alanlara girdikçe
          sağ tarafta otomatik olarak kısa bir problem özeti oluşur. Bu özet
          daha sonra 8D, 5 Why ve FMEA çalışmalarında giriş verisi olarak
          kullanılabilir.
        </p>
      </section>

      {/* Sol: form · Sağ: özet kartı */}
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* Form paneli */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-900">
              5N1K Giriş Alanları
            </h2>
            <button
              type="button"
              onClick={() => setForm(INITIAL_FORM)}
              className="rounded-full border border-slate-300 px-3 py-1 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              Formu Temizle
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {/* What */}
            <div className="space-y-1 md:col-span-2">
              <label className="block text-[11px] font-medium text-slate-700">
                Ne? (What) – Problem nedir?
              </label>
              <textarea
                rows={2}
                value={form.what}
                onChange={(e) => handleChange("what", e)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                placeholder="Örn. Ön sağ amortisör bağlantı cıvatasında gevşeme şikayeti..."
              />
            </div>

            {/* Where */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-slate-700">
                Nerede? (Where)
              </label>
              <textarea
                rows={2}
                value={form.where}
                onChange={(e) => handleChange("where", e)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                placeholder="Örn. Montaj hattı 2, istasyon 4 / saha aracı, Avrupa pazarı..."
              />
            </div>

            {/* When */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-slate-700">
                Ne zaman? (When)
              </label>
              <textarea
                rows={2}
                value={form.when}
                onChange={(e) => handleChange("when", e)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                placeholder="Örn. Soğuk havalarda, 10.000 km sonrası, son 3 ay içinde..."
              />
            </div>

            {/* Who */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-slate-700">
                Kim? (Who)
              </label>
              <textarea
                rows={2}
                value={form.who}
                onChange={(e) => handleChange("who", e)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                placeholder="Örn. Araç kullanıcısı, montaj operatörü, kalite kontrol, bayi teknik ekibi..."
              />
            </div>

            {/* Why */}
            <div className="space-y-1 md:col-span-2">
              <label className="block text-[11px] font-medium text-slate-700">
                Neden? (Why) – İlk tahmin / hipotez
              </label>
              <textarea
                rows={2}
                value={form.why}
                onChange={(e) => handleChange("why", e)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                placeholder="Örn. Tork değerinin düşük olması, uygun olmayan rondela kullanımı, hatalı fikstür konumlandırması..."
              />
            </div>

            {/* How */}
            <div className="space-y-1 md:col-span-2">
              <label className="block text-[11px] font-medium text-slate-700">
                Nasıl? (How) – Problem nasıl ortaya çıkıyor?
              </label>
              <textarea
                rows={2}
                value={form.how}
                onChange={(e) => handleChange("how", e)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                placeholder="Örn. Araç darbeye maruz kaldığında, belirli tork altında, belirli hız/sıcaklık koşullarında..."
              />
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Not: Buraya girilen bilgiler yalnızca bu tarayıcı oturumunda saklanır.
            Gelecekte PDF/Excel çıktı ve hesap açarak kayıt tutma özellikleri
            premium paket kapsamında eklenebilir.
          </p>
        </div>

        {/* Özet paneli */}
        <FiveN1KSummaryCard form={form} isEmpty={isEmpty} />
      </section>
    </div>
  );
}

/* --------------------- ÖZET KARTI BİLEŞENİ --------------------- */

type SummaryProps = {
  form: FiveN1KForm;
  isEmpty: boolean;
};

function FiveN1KSummaryCard({ form, isEmpty }: SummaryProps) {
  const { what, where, when, who, why, how } = form;

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
      <h2 className="mb-2 text-sm font-semibold text-slate-900">
        Problem Özeti (5N1K)
      </h2>

      {isEmpty ? (
        <p className="text-[11px] text-slate-500">
          Soldaki alanları doldurdukça burada otomatik olarak kısa bir problem
          özeti oluşacaktır. Bu özet; 8D raporu, 5 Why analizi ve FMEA
          çalışmalarında doğrudan kullanılabilecek şekilde kurgulanmıştır.
        </p>
      ) : (
        <div className="space-y-2 text-[11px] text-slate-700">
          {what && (
            <p>
              <span className="font-semibold">Ne?</span> {what}
            </p>
          )}
          {where && (
            <p>
              <span className="font-semibold">Nerede?</span> {where}
            </p>
          )}
          {when && (
            <p>
              <span className="font-semibold">Ne zaman?</span> {when}
            </p>
          )}
          {who && (
            <p>
              <span className="font-semibold">Kim?</span> {who}
            </p>
          )}
          {why && (
            <p>
              <span className="font-semibold">İlk tahmin (Neden?):</span> {why}
            </p>
          )}
          {how && (
            <p>
              <span className="font-semibold">Nasıl ortaya çıkıyor?</span> {how}
            </p>
          )}

          <div className="mt-3 rounded-lg bg-slate-50 p-3">
            <p className="mb-1 font-semibold text-slate-900">
              Kısa Problem Tanımı (tek satır)
            </p>
            <p className="font-mono text-[11px] text-slate-800">
              {buildOneLineSummary(form)}
            </p>
          </div>
        </div>
      )}

      <hr className="my-3 border-slate-200" />

      <ul className="list-disc space-y-1 pl-4 text-[11px] text-slate-600">
        <li>
          Bu özet, 8D&apos;nin D2 (Problem Tanımı) ve D3 (Geçici Önlem) adımlarına
          temel oluşturabilir.
        </li>
        <li>
          Aynı problem için 5 Why analizine geçtiğinde, buradaki <em>&quot;Ne?&quot;</em> ve{" "}
          <em>&quot;Neden?&quot;</em> cümleleri başlangıç noktası olarak kullanılabilir.
        </li>
      </ul>
    </aside>
  );
}

function buildOneLineSummary(form: FiveN1KForm): string {
  const parts: string[] = [];

  if (form.what.trim()) {
    parts.push(form.what.trim());
  }

  if (form.where.trim()) {
    parts.push(`Konum: ${form.where.trim()}`);
  }

  if (form.when.trim()) {
    parts.push(`Zaman: ${form.when.trim()}`);
  }

  if (form.who.trim()) {
    parts.push(`İlgili: ${form.who.trim()}`);
  }

  if (form.why.trim()) {
    parts.push(`İlk tahmin: ${form.why.trim()}`);
  }

  if (form.how.trim()) {
    parts.push(`Ortaya çıkış şekli: ${form.how.trim()}`);
  }

  if (parts.length === 0) {
    return "Problem tanımı henüz tamamlanmamış.";
  }

  return parts.join(" | ");
}
