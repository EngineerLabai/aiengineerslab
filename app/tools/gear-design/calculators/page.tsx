"use client";

import { useMemo, useState } from "react";

const calculators = [
  { name: "Modül Hesaplayıcı", description: "Dişli boyutu, diş sayısı ve kaliteye göre modül önerisi ve kontrolü.", status: "Aktif" },
  { name: "Dişli Oranı Hesaplayıcı", description: "z1/z2 veya d1/d2 ile oran, rpm ve tork ilişkisi.", status: "Aktif" },
  { name: "Çevresel Kuvvet – Tork Hesaplayıcı", description: "Ft = 2·T/d ve Fr/Fa (helis) otomatik hesap.", status: "Aktif" },
  { name: "Helis Aksiyel Kuvvet Hesaplayıcı", description: "Helis açısı ve basınç açısıyla Fa hesaplar; yatak yükü tahmini.", status: "Aktif" },
  { name: "Backlash Hesaplayıcı", description: "Min/nom/max backlash; modül, merkez mesafesi, sıcaklık girişi.", status: "Aktif" },
  { name: "Kontak Oranı Hesaplayıcı", description: "εα / εβ hesaplarıyla gürültü/denge tahmini.", status: "Yakında" },
  { name: "Yağ Viskozitesi Seçici", description: "ks ve vç grafiğine göre ISO VG ve yağlama yöntemi önerisi.", status: "Yakında" },
  { name: "Dişli Ağırlığı – Gövde Optimizasyonu", description: "Geometri + boşaltma/kaburga bilgisiyle ağırlık ve tasarruf tahmini.", status: "Yakında" },
];

const STANDARD_MODULES = [0.5, 0.6, 0.8, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20];
const STEEL_ALPHA = 12e-6; // 1/°C

export default function GearCalculatorsPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_24%)]" />
        <div className="relative space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700">
              Dişli Online Hesaplayıcılar
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              Modül, oran, Ft/Fr/Fa, helis Fa ve backlash aktif
            </span>
          </div>
          <h1 className="text-balance text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
            Dişli hesaplama araçları – önizleme ve aktif modüller
          </h1>
          <p className="text-sm leading-relaxed text-slate-700">
            Modül, dişli oranı, Ft/Fr/Fa, helis aksiyel kuvvet ve backlash hesaplayıcıları çalışır durumda.
            Diğer araçlar (kontak oranı, yağ viskozitesi, ağırlık) planlandı; bu sayfa üzerinden eklenecek.
          </p>
        </div>
      </section>

      <ModuleCalculator />
      <RatioCalculator />
      <ForceTorqueCalculator />
      <HelixAxialCalculator />
      <BacklashCalculator />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {calculators.map((calc) => (
          <article
            key={calc.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold leading-snug text-slate-900 break-words">{calc.name}</h2>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    calc.status === "Aktif"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {calc.status}
                </span>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-700 break-words">{calc.description}</p>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span>{calc.status === "Aktif" ? "Form aşağıda" : "Etkileşimli form eklenecek"}</span>
              <button
                disabled={calc.status !== "Aktif"}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                  calc.status === "Aktif"
                    ? "border-sky-200 bg-sky-50 text-sky-700"
                    : "border-slate-300 bg-slate-50 text-slate-500"
                }`}
              >
                {calc.status === "Aktif" ? "Kullan" : "Yakında"}
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function ForceTorqueCalculator() {
  const [inp, setInp] = useState({
    power: "5",
    rpm: "1500",
    torque: "",
    diameter: "120",
    alpha: "20",
    beta: "0",
  });

  const res = useMemo(() => {
    const P = Number(inp.power);
    const n = Number(inp.rpm);
    const Tinput = Number(inp.torque);
    const d = Number(inp.diameter);
    const alpha = Number(inp.alpha);
    const beta = Number(inp.beta);
    const okGeom = d > 0 && alpha > 0;
    const hasPowerTorque = (P > 0 && n > 0) || Tinput > 0;
    if (!okGeom || !hasPowerTorque) return null;
    const T = Tinput > 0 ? Tinput : (9550 * P) / n; // Nm
    const Ft = (2000 * T) / d; // N (d in mm)
    const Fr = Ft * Math.tan((alpha * Math.PI) / 180);
    const Fa = Ft * Math.tan((beta * Math.PI) / 180);
    return { T, Ft, Fr, Fa };
  }, [inp]);

  return (
    <section id="force-torque-calculator" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Çevresel Kuvvet – Tork Hesaplayıcı</h2>
          <p className="text-sm text-slate-700">
            Güç/rpm veya tork gir; Ft, Fr (basınç açısı) ve Fa (helis açısı) hesaplanır.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          Aktif
        </span>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Güç P [kW]" value={inp.power} onChange={(v) => setInp({ ...inp, power: v })} />
        <Field label="Devir n [rpm]" value={inp.rpm} onChange={(v) => setInp({ ...inp, rpm: v })} />
        <Field
          label="Tork T [Nm] (opsiyonel, P ve n yoksa)"
          value={inp.torque}
          onChange={(v) => setInp({ ...inp, torque: v })}
        />
        <Field label="Pinyon çapı d [mm]" value={inp.diameter} onChange={(v) => setInp({ ...inp, diameter: v })} />
        <Field label="Basınç açısı α [deg]" value={inp.alpha} onChange={(v) => setInp({ ...inp, alpha: v })} />
        <Field label="Helis açısı β [deg]" value={inp.beta} onChange={(v) => setInp({ ...inp, beta: v })} />
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-600">
        <button
          type="button"
          onClick={() =>
            setInp({ power: "5", rpm: "1500", torque: "", diameter: "120", alpha: "20", beta: "0" })
          }
          className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
        >
          Örnek değerlerle doldur
        </button>
        <span>Ft = 2·T/d; Fr = Ft·tan(α); Fa = Ft·tan(β).</span>
      </div>

      {res ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Result label="Tork T [Nm]" value={`${res.T.toFixed(2)} Nm`} />
          <Result label="Ft [N]" value={`${res.Ft.toFixed(1)} N`} />
          <Result label="Fr [N]" value={`${res.Fr.toFixed(1)} N`} />
          <Result label="Fa [N]" value={`${res.Fa.toFixed(1)} N`} />
        </div>
      ) : (
        <p className="mt-3 text-xs text-red-600">P/n veya T ve pozitif geometri değerleri giriniz.</p>
      )}
    </section>
  );
}

function HelixAxialCalculator() {
  const [inp, setInp] = useState({
    power: "7.5",
    rpm: "1450",
    torque: "",
    diameter: "140",
    alpha: "20",
    beta: "15",
  });

  const res = useMemo(() => {
    const P = Number(inp.power);
    const n = Number(inp.rpm);
    const Tinput = Number(inp.torque);
    const d = Number(inp.diameter);
    const alpha = Number(inp.alpha);
    const beta = Number(inp.beta);
    const okGeom = d > 0 && alpha > 0 && beta >= 0;
    const hasPowerTorque = (P > 0 && n > 0) || Tinput > 0;
    if (!okGeom || !hasPowerTorque) return null;
    const T = Tinput > 0 ? Tinput : (9550 * P) / n;
    const Ft = (2000 * T) / d;
    const Fa = Ft * Math.tan((beta * Math.PI) / 180);
    const Fr = Ft * Math.tan((alpha * Math.PI) / 180);
    return { T, Ft, Fr, Fa };
  }, [inp]);

  return (
    <section id="helix-axial-calculator" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Helis Aksiyel Kuvvet Hesaplayıcı</h2>
          <p className="text-sm text-slate-700">
            Helis açısı ve basınç açısı ile aksiyel kuvveti hesapla; Ft ve Fr bilgisi de verilir.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          Aktif
        </span>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Güç P [kW]" value={inp.power} onChange={(v) => setInp({ ...inp, power: v })} />
        <Field label="Devir n [rpm]" value={inp.rpm} onChange={(v) => setInp({ ...inp, rpm: v })} />
        <Field
          label="Tork T [Nm] (opsiyonel, P ve n yoksa)"
          value={inp.torque}
          onChange={(v) => setInp({ ...inp, torque: v })}
        />
        <Field label="Pinyon çapı d [mm]" value={inp.diameter} onChange={(v) => setInp({ ...inp, diameter: v })} />
        <Field label="Basınç açısı α [deg]" value={inp.alpha} onChange={(v) => setInp({ ...inp, alpha: v })} />
        <Field label="Helis açısı β [deg]" value={inp.beta} onChange={(v) => setInp({ ...inp, beta: v })} />
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-600">
        <button
          type="button"
          onClick={() =>
            setInp({ power: "7.5", rpm: "1450", torque: "", diameter: "140", alpha: "20", beta: "15" })
          }
          className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
        >
          Örnek değerlerle doldur
        </button>
        <span>Fa = Ft·tan(β); Fr = Ft·tan(α); Ft = 2·T/d.</span>
      </div>

      {res ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Result label="Tork T [Nm]" value={`${res.T.toFixed(2)} Nm`} />
          <Result label="Ft [N]" value={`${res.Ft.toFixed(1)} N`} />
          <Result label="Fr [N]" value={`${res.Fr.toFixed(1)} N`} />
          <Result label="Fa [N]" value={`${res.Fa.toFixed(1)} N`} />
        </div>
      ) : (
        <p className="mt-3 text-xs text-red-600">P/n veya T ve pozitif geometri değerleri giriniz.</p>
      )}
    </section>
  );
}

function BacklashCalculator() {
  const [inp, setInp] = useState({
    module: "2",
    faceWidth: "30",
    centerDistance: "150",
    deltaT: "10",
    alphaTh: "12",
  });

  const res = useMemo(() => {
    const m = Number(inp.module);
    const b = Number(inp.faceWidth);
    const a = Number(inp.centerDistance);
    const dT = Number(inp.deltaT);
    const alphaTh = Number(inp.alphaTh) * 1e-6 || STEEL_ALPHA;
    const ok = m > 0 && b > 0 && a > 0;
    if (!ok) return null;
    const jNom = 0.04 * m + 0.001 * b; // basit nominal backlash tahmini
    const jMin = 0.8 * jNom;
    const jMax = 1.2 * jNom;
    const thermal = a * alphaTh * dT; // merkez mesafesi termal genleşme
    const jNomAdj = jNom + thermal;
    const jMinAdj = jMin + thermal;
    const jMaxAdj = jMax + thermal;
    return { jNom, jMin, jMax, thermal, jNomAdj, jMinAdj, jMaxAdj };
  }, [inp]);

  return (
    <section id="backlash-calculator" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Backlash Hesaplayıcı</h2>
          <p className="text-sm text-slate-700">
            Modül, yüz genişliği, merkez mesafesi ve sıcaklık farkı ile min/nom/max backlash tahmini yapar (basit rehber).
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          Aktif
        </span>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Modül m [mm]" value={inp.module} onChange={(v) => setInp({ ...inp, module: v })} />
        <Field label="Yüz genişliği b [mm]" value={inp.faceWidth} onChange={(v) => setInp({ ...inp, faceWidth: v })} />
        <Field
          label="Merkez mesafesi a [mm]"
          value={inp.centerDistance}
          onChange={(v) => setInp({ ...inp, centerDistance: v })}
        />
        <Field
          label="Sıcaklık farkı ΔT [°C]"
          value={inp.deltaT}
          onChange={(v) => setInp({ ...inp, deltaT: v })}
        />
        <Field
          label="Isıl genleşme αth [µm/m·°C]"
          value={inp.alphaTh}
          onChange={(v) => setInp({ ...inp, alphaTh: v })}
        />
        <div className="flex items-end">
          <button
            type="button"
            onClick={() =>
              setInp({ module: "2", faceWidth: "30", centerDistance: "150", deltaT: "10", alphaTh: "12" })
            }
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Örnek değerlerle doldur
          </button>
        </div>
      </div>

      {res ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Result label="Min backlash j_min [mm]" value={`${res.jMin.toFixed(3)} mm`} />
          <Result label="Nominal backlash j_nom [mm]" value={`${res.jNom.toFixed(3)} mm`} />
          <Result label="Maksimum backlash j_max [mm]" value={`${res.jMax.toFixed(3)} mm`} />
          <Result label="Termal düzeltme Δa [mm]" value={`${res.thermal.toFixed(4)} mm`} />
          <Result label="Nominal (ΔT sonrası)" value={`${res.jNomAdj.toFixed(3)} mm`} />
          <Result label="Min/Max (ΔT sonrası)" value={`${res.jMinAdj.toFixed(3)} / ${res.jMaxAdj.toFixed(3)} mm`} />
        </div>
      ) : (
        <p className="mt-3 text-xs text-red-600">Pozitif değerler giriniz.</p>
      )}

      <p className="mt-3 text-[11px] text-slate-600">
        Bu tahmin ISO/DIN rehber mantığına uygun basit bir ön hesap yaklaşımıdır; gerçek tolerans sınıfı ve çizim
        gereksinimleri için standart tablolarına bakınız.
      </p>
    </section>
  );
}

function RatioCalculator() {
  const [inp, setInp] = useState({
    z1: "20",
    z2: "60",
    rpm1: "1500",
    torque1: "50",
    efficiency: "0.97",
  });

  const res = useMemo(() => {
    const z1 = Number(inp.z1);
    const z2 = Number(inp.z2);
    const rpm1 = Number(inp.rpm1);
    const torque1 = Number(inp.torque1);
    const eta = Number(inp.efficiency);
    const ok = z1 > 0 && z2 > 0 && eta > 0 && eta <= 1;
    if (!ok) return null;
    const ratio = z2 / z1;
    const rpm2 = isFinite(rpm1) && rpm1 > 0 ? rpm1 / ratio : null;
    const torque2 = isFinite(torque1) && torque1 > 0 ? torque1 * ratio * eta : null;
    return { ratio, rpm2, torque2, eta };
  }, [inp]);

  return (
    <section id="ratio-calculator" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Dişli Oranı Hesaplayıcı</h2>
          <p className="text-sm text-slate-700">
            Diş sayıları ve giriş devrini gir; oran, çıkış devri ve torku (verim dahil) hesapla.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          Aktif
        </span>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Giriş diş sayısı z1" value={inp.z1} onChange={(v) => setInp({ ...inp, z1: v })} />
        <Field label="Çıkış diş sayısı z2" value={inp.z2} onChange={(v) => setInp({ ...inp, z2: v })} />
        <Field label="Giriş devri n1 [rpm]" value={inp.rpm1} onChange={(v) => setInp({ ...inp, rpm1: v })} />
        <Field label="Giriş torku T1 [Nm]" value={inp.torque1} onChange={(v) => setInp({ ...inp, torque1: v })} />
        <Field
          label="Verim η (0-1)"
          value={inp.efficiency}
          onChange={(v) => setInp({ ...inp, efficiency: v })}
        />
        <div className="flex items-end">
          <button
            type="button"
            onClick={() => setInp({ z1: "20", z2: "60", rpm1: "1500", torque1: "50", efficiency: "0.97" })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Örnek değerlerle doldur
          </button>
        </div>
      </div>

      {res ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Result label="Oran i = z2/z1" value={res.ratio.toFixed(3)} />
          <Result label="Çıkış devri n2 [rpm]" value={res.rpm2 ? res.rpm2.toFixed(1) : "—"} />
          <Result label="Çıkış torku T2 [Nm]" value={res.torque2 ? res.torque2.toFixed(1) : "—"} />
          <Result label="Verim η" value={res.eta.toFixed(3)} />
        </div>
      ) : (
        <p className="mt-3 text-xs text-red-600">z1, z2 ve verim değerlerini pozitif giriniz (η ≤ 1).</p>
      )}

      <p className="mt-3 text-[11px] text-slate-600">
        Not: T2 hesabında verim katsayısı η çarpılır. Giriş rpm/tork girilmezse sadece oran hesaplanır.
      </p>
    </section>
  );
}

function ModuleCalculator() {
  const [inputs, setInputs] = useState({ diameter: "200", teeth: "40" });

  const result = useMemo(() => {
    const d = Number(inputs.diameter);
    const z = Number(inputs.teeth);
    if (!isFinite(d) || !isFinite(z) || d <= 0 || z <= 0) return null;
    const mRaw = d / z;
    const circularPitch = Math.PI * mRaw;
    const closest = STANDARD_MODULES.reduce(
      (best, m) => {
        const diff = Math.abs(m - mRaw);
        return diff < best.diff ? { m, diff } : best;
      },
      { m: STANDARD_MODULES[0], diff: Math.abs(STANDARD_MODULES[0] - mRaw) }
    );
    const suggestedM = closest.m;
    const suggestedDiameter = suggestedM * z;
    const diffPercent = ((suggestedM - mRaw) / mRaw) * 100;
    const zMin20deg = 17; // approx. undercut limit for 20° full-depth
    return {
      mRaw,
      circularPitch,
      suggestedM,
      suggestedDiameter,
      diffPercent,
      zMinWarning: z < zMin20deg,
      zMin20deg,
    };
  }, [inputs]);

  return (
    <section id="module-calculator" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Modül Hesaplayıcı</h2>
          <p className="text-sm text-slate-700">
            Hatve çapı (d) ve diş sayısını gir, ham modülü hesapla; en yakın standart modülü ve önerilen çapı gör.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          Aktif
        </span>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Field
          label="Hatve çapı d [mm]"
          value={inputs.diameter}
          onChange={(v) => setInputs({ ...inputs, diameter: v })}
        />
        <Field label="Diş sayısı z" value={inputs.teeth} onChange={(v) => setInputs({ ...inputs, teeth: v })} />
        <div className="flex items-end">
          <button
            type="button"
            onClick={() => setInputs({ diameter: "200", teeth: "40" })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Örnek değerlerle doldur
          </button>
        </div>
      </div>

      {result ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Result label="Ham modül m" value={`${result.mRaw.toFixed(3)} mm`} />
          <Result label="Hatve (π·m)" value={`${result.circularPitch.toFixed(3)} mm`} />
          <Result label="Önerilen standart m" value={`${result.suggestedM.toFixed(3)} mm`} />
          <Result label="Önerilen çap (m_std·z)" value={`${result.suggestedDiameter.toFixed(2)} mm`} />
          <Result
            label="Standart sapma"
            value={`${result.diffPercent >= 0 ? "+" : ""}${result.diffPercent.toFixed(1)} %`}
          />
          <Result
            label="Undercut uyarısı (20°)"
            value={result.zMinWarning ? `Risk: z < ${result.zMin20deg}` : "Uygun"}
            tone={result.zMinWarning ? "warn" : "ok"}
          />
        </div>
      ) : (
        <p className="mt-3 text-xs text-red-600">Pozitif sayılar giriniz.</p>
      )}

      <p className="mt-3 text-[11px] text-slate-600">
        Standart modül serisi: {STANDARD_MODULES.join(", ")}. Çap/diş sayısı değiştiğinde en yakın standart modül ve
        buna karşılık gelen önerilen hatve çapı gösterilir.
      </p>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="space-y-1">
      <span className="block text-[11px] font-medium text-slate-700">{label}</span>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/30"
      />
    </label>
  );
}

function Result({ label, value, tone = "neutral" }: { label: string; value: string; tone?: "neutral" | "warn" | "ok" }) {
  const toneClass =
    tone === "warn"
      ? "bg-amber-50 text-amber-800"
      : tone === "ok"
        ? "bg-emerald-50 text-emerald-800"
        : "bg-slate-50 text-slate-800";

  return (
    <div className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${toneClass}`}>
      <span className="text-slate-600">{label}</span>
      <span className="font-mono text-[12px] font-semibold">{value}</span>
    </div>
  );
}
