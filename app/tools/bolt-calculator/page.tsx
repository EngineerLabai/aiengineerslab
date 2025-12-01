// app/tools/bolt-calculator/page.tsx
"use client";

import { useState, FormEvent } from "react";

type GradeKey = "8.8" | "10.9" | "12.9";
type FrictionKey = "dry" | "oiled" | "coated";

type Inputs = {
  d: string;
  P: string;
  grade: GradeKey;
  preloadPercent: string;
  friction: FrictionKey;
};

type Results = {
  As: number | null;       // mm²
  Fv: number | null;       // kN
  torque: number | null;   // Nm
  sigma: number | null;    // MPa
  safety: number | null;   // -
};

type BoltPresetId = "custom" | "M3" | "M4" | "M5" | "M6" | "M8" | "M10";

type BoltPreset = {
  id: BoltPresetId;
  label: string;
  d: number;
  P: number;
};

// Bolt Database'deki değerlerle uyumlu küçük bir preset listesi:
const BOLT_PRESETS: BoltPreset[] = [
  { id: "M3", label: "M3 x 0.50", d: 3, P: 0.5 },
  { id: "M4", label: "M4 x 0.70", d: 4, P: 0.7 },
  { id: "M5", label: "M5 x 0.80", d: 5, P: 0.8 },
  { id: "M6", label: "M6 x 1.00", d: 6, P: 1.0 },
  { id: "M8", label: "M8 x 1.25", d: 8, P: 1.25 },
  { id: "M10", label: "M10 x 1.50", d: 10, P: 1.5 },
];

const GRADE_DATA: Record<GradeKey, { Re: number }> = {
  "8.8": { Re: 640 },   // MPa
  "10.9": { Re: 940 },
  "12.9": { Re: 1100 },
};

const FRICTION_K: Record<FrictionKey, { K: number; label: string }> = {
  dry: { K: 0.25, label: "Kuru" },
  oiled: { K: 0.2, label: "Hafif yağlı" },
  coated: { K: 0.18, label: "Kaplamalı" },
};

export default function BoltCalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>({
    d: "8",
    P: "1.25",
    grade: "8.8",
    preloadPercent: "70",
    friction: "dry",
  });

  const [results, setResults] = useState<Results>({
    As: null,
    Fv: null,
    torque: null,
    sigma: null,
    safety: null,
  });

  const [error, setError] = useState<string | null>(null);

  // Hangi preset seçili?
  const [selectedPreset, setSelectedPreset] = useState<BoltPresetId>("M8");

  function handleChange<K extends keyof Inputs>(key: K, value: Inputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }));

    // Kullanıcı d veya P'yi elle oynarsa preset'i "manuel"e çek
    if (key === "d" || key === "P") {
      setSelectedPreset("custom");
    }
  }

  function handlePresetChange(id: BoltPresetId) {
    setSelectedPreset(id);

    if (id === "custom") return;

    const preset = BOLT_PRESETS.find((p) => p.id === id);
    if (!preset) return;

    // Preset seçildiğinde d ve P alanlarını otomatik doldur
    setInputs((prev) => ({
      ...prev,
      d: preset.d.toString(),
      P: preset.P.toString(),
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const d = Number(inputs.d);
    const P = Number(inputs.P);
    const preload = Number(inputs.preloadPercent);

    if (!d || d <= 0 || !P || P <= 0) {
      setError("d ve P değerlerini pozitif sayı olarak giriniz.");
      setResults({
        As: null,
        Fv: null,
        torque: null,
        sigma: null,
        safety: null,
      });
      return;
    }

    if (!preload || preload <= 0 || preload > 90) {
      setError("Ön yük seviyesini %1–90 aralığında giriniz (tipik: %70).");
      setResults({
        As: null,
        Fv: null,
        torque: null,
        sigma: null,
        safety: null,
      });
      return;
    }

    const Re = GRADE_DATA[inputs.grade].Re; // MPa
    const K = FRICTION_K[inputs.friction].K;

    // 1) Gerilme alanı As [mm²]
    const As =
      (Math.PI / 4) * Math.pow(d - 0.9382 * P, 2); // metrik diş için yaklaşık

    // 2) Ön yük Fv [N]
    const preloadRatio = preload / 100;
    const Fv_N = preloadRatio * Re * As; // N (MPa * mm² = N)

    // 3) Tork T [Nm]
    const T_Nm = K * Fv_N * (d / 1000); // d [m]

    // 4) Çekme gerilmesi σ [MPa]
    const sigma = Fv_N / As; // N / mm² = MPa

    // 5) Güvenlik katsayısı S
    const safety = Re / sigma;

    setResults({
      As,
      Fv: Fv_N / 1000, // kN
      torque: T_Nm,
      sigma,
      safety,
    });
  }

  return (
    <div className="space-y-6">
      {/* Başlık ve açıklama */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Mekanik Hesaplayıcı
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-600">
            Cıvata – Diş – Tork Merkezi
          </span>
        </div>

        <h1 className="text-lg font-semibold text-slate-900">
          Cıvata Boyut ve Temel Değer Hesaplayıcı
        </h1>
        <p className="mt-2 text-xs text-slate-600">
          Nominal çap, diş adımı ve kalite sınıfına göre gerilme alanı (A
          <sub>s</sub>), yaklaşık ön yük ve tork aralığını hesaplamak için
          kullanılır. Değerler pratik mühendislik kullanımına yönelik
          yaklaşık değerlerdir.
        </p>
      </section>

      {/* Form + Sonuçlar */}
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* Input paneli */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-900">
            Giriş Parametreleri
          </h2>

          <form className="space-y-3 text-xs" onSubmit={handleSubmit}>
            {/* Preset seçim alanı */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-slate-700">
                Standart cıvata seç (opsiyonel)
              </label>
              <select
                value={selectedPreset}
                onChange={(e) =>
                  handlePresetChange(e.target.value as BoltPresetId)
                }
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
              >
                <option value="custom">Manuel (serbest giriş)</option>
                <optgroup label="Metrik (ISO)">
                  {BOLT_PRESETS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </optgroup>
              </select>
              <p className="text-[11px] text-slate-500">
                Bir ölçü seçersen d ve P alanları otomatik dolar; yine de
                istersen elle değiştirebilirsin.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-700">
                  Nominal çap d [mm]
                </label>
                <input
                  type="number"
                  value={inputs.d}
                  onChange={(e) => handleChange("d", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                  placeholder="Örn. 8"
                  step="0.1"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-700">
                  Diş adımı P [mm]
                </label>
                <input
                  type="number"
                  value={inputs.P}
                  onChange={(e) => handleChange("P", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                  placeholder="Örn. 1.25"
                  step="0.01"
                />
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-700">
                  Kalite sınıfı
                </label>
                <select
                  value={inputs.grade}
                  onChange={(e) =>
                    handleChange("grade", e.target.value as GradeKey)
                  }
                  className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                >
                  <option value="8.8">8.8</option>
                  <option value="10.9">10.9</option>
                  <option value="12.9">12.9</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-700">
                  Sürtünme durumu
                </label>
                <select
                  value={inputs.friction}
                  onChange={(e) =>
                    handleChange("friction", e.target.value as FrictionKey)
                  }
                  className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                >
                  <option value="dry">Kuru</option>
                  <option value="oiled">Hafif yağlı</option>
                  <option value="coated">Özel kaplama (Zn-Ni vb.)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-slate-700">
                Ön yük seviyesi [%Re]
              </label>
              <input
                type="number"
                value={inputs.preloadPercent}
                onChange={(e) => handleChange("preloadPercent", e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                min={1}
                max={90}
              />
            </div>

            {error && (
              <p className="text-[11px] text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-slate-800"
            >
              Hesapla
            </button>
          </form>
        </div>

        {/* Sonuç paneli */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-900">
            Hesap Sonuçları
          </h2>

          <div className="space-y-2">
            <ResultRow
              label="Gerilme alanı Aₛ"
              value={
                results.As !== null ? `${results.As.toFixed(1)} mm²` : "–"
              }
            />
            <ResultRow
              label="Ön yük Fᵥ"
              value={
                results.Fv !== null ? `${results.Fv.toFixed(2)} kN` : "–"
              }
            />
            <ResultRow
              label="Önerilen tork T"
              value={
                results.torque !== null
                  ? `${results.torque.toFixed(1)} Nm`
                  : "–"
              }
            />
            <ResultRow
              label="Çekme gerilmesi σ"
              value={
                results.sigma !== null
                  ? `${results.sigma.toFixed(0)} MPa`
                  : "–"
              }
            />
            <ResultRow
              label="Güvenlik katsayısı S"
              value={
                results.safety !== null
                  ? results.safety.toFixed(2)
                  : "–"
              }
            />
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Değerler, metrik dişler için yaklaşık formüllerle hesaplanmıştır.
            Kritik uygulamalarda OEM tork tabloları ve ilgili standartlar
            (ör. ISO 898-1) mutlaka kontrol edilmelidir.
          </p>
        </div>
      </section>
    </div>
  );
}

type ResultRowProps = {
  label: string;
  value: string;
};

function ResultRow({ label, value }: ResultRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-1.5">
      <span className="text-[11px] text-slate-600">{label}</span>
      <span className="font-mono text-[11px] font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}
