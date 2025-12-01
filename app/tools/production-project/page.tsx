// app/tools/production-project/page.tsx
"use client";

import { useMemo, useState } from "react";

type TaktInputs = {
  netTime: string; // available time per shift (min)
  demand: string; // units per shift
};

type OeeInputs = {
  availability: string; // %
  performance: string; // %
  quality: string; // %
};

type ToleranceInputs = {
  dims: string; // comma-separated tolerances (mm)
  method: "linear" | "rss";
};

type CpmInputs = {
  activities: string; // comma-separated durations (days)
  totalFloat: string; // assumed buffer %
};

const TAKT_INIT: TaktInputs = {
  netTime: "450",
  demand: "900",
};

const OEE_INIT: OeeInputs = {
  availability: "85",
  performance: "90",
  quality: "98",
};

const TOL_INIT: ToleranceInputs = {
  dims: "0.05,0.02,0.03",
  method: "rss",
};

const CPM_INIT: CpmInputs = {
  activities: "5,3,4,2",
  totalFloat: "20",
};

export default function ProductionProjectPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Üretim & Proje
          </span>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-medium text-indigo-700">
            Çoklu Hesap
          </span>
        </div>
        <h1 className="text-lg font-semibold text-slate-900">
          Üretim & Proje Hızlı Paket
        </h1>
        <p className="mt-2 text-xs text-slate-600">
          Öğrencilerin ve mezunların sık sorduğu 3 kısa hesap: (1) takt time, (2) OEE, (3)
          tolerans yığılımı (lineer/RSS), (4) basit CPM süre + buffer tahmini. Hızlı fikir
          vermek içindir; gerçek sahada detaylı çizelgeleme ve istatistik gerekir.
        </p>
      </section>

      <TaktBlock />
      <OeeBlock />
      <ToleranceBlock />
      <CpmBlock />
    </div>
  );
}

function TaktBlock() {
  const [inp, setInp] = useState<TaktInputs>(TAKT_INIT);

  const res = useMemo(() => {
    const t = Number(inp.netTime);
    const d = Number(inp.demand);
    if (t <= 0 || d <= 0) return null;
    const taktMin = t / d; // min/unit
    const taktSec = taktMin * 60;
    return { taktMin, taktSec };
  }, [inp]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">1) Takt Time</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Net süre (dk/mesai)" value={inp.netTime} onChange={(v) => setInp({ ...inp, netTime: v })} />
        <Field label="Talep (adet/mesai)" value={inp.demand} onChange={(v) => setInp({ ...inp, demand: v })} />
      </div>
      {res ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <ResultRow label="Takt (dk/adet)" value={res.taktMin.toFixed(3)} />
          <ResultRow label="Takt (sn/adet)" value={res.taktSec.toFixed(1)} />
        </div>
      ) : (
        <p className="mt-2 text-[11px] text-red-600">Pozitif değerler gir.</p>
      )}
    </section>
  );
}

function OeeBlock() {
  const [inp, setInp] = useState<OeeInputs>(OEE_INIT);

  const res = useMemo(() => {
    const A = Number(inp.availability);
    const P = Number(inp.performance);
    const Q = Number(inp.quality);
    if (A <= 0 || P <= 0 || Q <= 0) return null;
    const oee = (A / 100) * (P / 100) * (Q / 100);
    return { oee };
  }, [inp]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">2) OEE</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Availability %" value={inp.availability} onChange={(v) => setInp({ ...inp, availability: v })} />
        <Field label="Performance %" value={inp.performance} onChange={(v) => setInp({ ...inp, performance: v })} />
        <Field label="Quality %" value={inp.quality} onChange={(v) => setInp({ ...inp, quality: v })} />
      </div>
      {res ? (
        <div className="mt-3">
          <ResultRow label="OEE" value={`${(res.oee * 100).toFixed(2)} %`} />
          <p className="mt-1 text-[11px] text-slate-600">
            Hızlı değerlendirme: &lt; 60% zayıf, 60-75% orta, 75-85% iyi, &gt; 85% dünya klası
            (genel kural). Kayıp analizi için A/P/Q bileşenlerini ayrı izleyin.
          </p>
        </div>
      ) : (
        <p className="mt-2 text-[11px] text-red-600">Pozitif değerler gir.</p>
      )}
    </section>
  );
}

function ToleranceBlock() {
  const [inp, setInp] = useState<ToleranceInputs>(TOL_INIT);

  const res = useMemo(() => {
    const parts = inp.dims
      .split(",")
      .map((v) => Number(v.trim()))
      .filter((v) => !Number.isNaN(v) && v > 0);
    if (!parts.length) return null;
    const linear = parts.reduce((a, b) => a + b, 0);
    const rss = Math.sqrt(parts.reduce((a, b) => a + b * b, 0));
    const tol = inp.method === "linear" ? linear : rss;
    return { linear, rss, tol, method: inp.method };
  }, [inp]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">3) Tolerans Yığılımı</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field
          label="Toleranslar (mm, virgülle)"
          value={inp.dims}
          onChange={(v) => setInp({ ...inp, dims: v })}
          helper="Örn: 0.05, 0.02, 0.03"
        />
        <label className="space-y-1">
          <span className="block text-[11px] font-medium text-slate-700">Metot</span>
          <select
            value={inp.method}
            onChange={(e) => setInp({ ...inp, method: e.target.value as "linear" | "rss" })}
            className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
          >
            <option value="rss">RSS (kareler toplamı)</option>
            <option value="linear">Lineer toplama</option>
          </select>
        </label>
      </div>
      {res ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <ResultRow label="Lineer toplam" value={`${res.linear.toFixed(3)} mm`} />
          <ResultRow label="RSS toplam" value={`${res.rss.toFixed(3)} mm`} />
          <ResultRow
            label="Seçili yöntem"
            value={`${res.method === "rss" ? "RSS" : "Lineer"} = ${res.tol.toFixed(3)} mm`}
          />
        </div>
      ) : (
        <p className="mt-2 text-[11px] text-red-600">Pozitif sayılar gir.</p>
      )}
      <p className="mt-2 text-[11px] text-slate-600">
        Not: RSS, bağımsız ve merkezlenmiş toleranslar için uygundur. Sistematik kayma
        varsa lineer toplama veya istatistiksel faktörler kullanılmalıdır.
      </p>
    </section>
  );
}

function CpmBlock() {
  const [inp, setInp] = useState<CpmInputs>(CPM_INIT);

  const res = useMemo(() => {
    const acts = inp.activities
      .split(",")
      .map((v) => Number(v.trim()))
      .filter((v) => !Number.isNaN(v) && v > 0);
    if (!acts.length) return null;
    const duration = acts.reduce((a, b) => a + b, 0); // basit seri kritik yol varsayımı
    const bufferPct = Number(inp.totalFloat);
    const buffer = bufferPct > 0 ? (duration * bufferPct) / 100 : 0;
    const total = duration + buffer;
    return { duration, buffer, total, bufferPct };
  }, [inp]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">4) Basit CPM Süre Tahmini</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field
          label="Aktivite süreleri (gün, virgülle)"
          value={inp.activities}
          onChange={(v) => setInp({ ...inp, activities: v })}
          helper="Örn: 5,3,4,2"
        />
        <Field
          label="Buffer / toplam float [%]"
          value={inp.totalFloat}
          onChange={(v) => setInp({ ...inp, totalFloat: v })}
          helper="Basit pay; gerçek CPM için ağ modeli gerekir"
        />
      </div>
      {res ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <ResultRow label="Kritik yol (toplam süre)" value={`${res.duration.toFixed(1)} gün`} />
          <ResultRow label="Buffer" value={`${res.buffer.toFixed(1)} gün`} />
          <ResultRow label="Toplam süre" value={`${res.total.toFixed(1)} gün`} />
        </div>
      ) : (
        <p className="mt-2 text-[11px] text-red-600">Pozitif sayılar gir.</p>
      )}
      <p className="mt-2 text-[11px] text-slate-600">
        Not: Bu hesap çok basittir (seri görev varsayımı). Gerçek CPM/PERT için ağ ilişkileri
        ve olasılıklı süreler modele dahil edilmelidir.
      </p>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  helper,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  helper?: string;
}) {
  return (
    <label className="space-y-1">
      <span className="block text-[11px] font-medium text-slate-700">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
      />
      {helper && <span className="text-[10px] text-slate-500">{helper}</span>}
    </label>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-1.5">
      <span className="text-[11px] text-slate-600">{label}</span>
      <span className="font-mono text-[11px] font-semibold text-slate-900">{value}</span>
    </div>
  );
}

