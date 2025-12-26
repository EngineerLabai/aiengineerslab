import ParticleBackground from "@/src/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <ParticleBackground />

      <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-6 font-mono text-sm mix-blend-difference">
        <div className="font-bold">AI_LAB_V1.0</div>
        <div className="flex gap-6">
          <button type="button" className="hover:underline">
            /PROJELER
          </button>
          <button type="button" className="hover:underline">
            /İLETİŞİM
          </button>
        </div>
      </nav>

      <section className="relative flex min-h-screen flex-col justify-center px-4 pb-20 pt-24 md:px-10 lg:px-16">
        <div className="pointer-events-none relative z-0 w-full select-none overflow-hidden">
          <h1 className="font-display font-bold text-[12vw] leading-[0.9] tracking-tighter text-neutral-300 opacity-90 md:text-[10vw] lg:text-[9vw]">
            MÜHENDİSLER
          </h1>
          <h1 className="font-display font-bold text-[12vw] leading-[0.9] tracking-tighter bg-gradient-to-r from-neutral-400 to-neutral-700 bg-clip-text text-transparent md:text-[10vw] lg:text-[9vw]">
            LABORATUVARI
          </h1>
        </div>

        <div className="relative z-10 -mt-12 w-full max-w-xl ml-auto mr-0 md:-mt-20 md:mr-8 lg:-mt-28 lg:mr-16">
          <div className="border-2 border-white bg-neutral-900/90 p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] backdrop-blur-sm">
            <div className="mb-4 flex justify-between border-b border-neutral-700 pb-2 font-mono text-xs text-cyan-400">
              <span>SYS_STATUS: ONLINE</span>
              <span className="animate-pulse">●</span>
            </div>

            <p className="mb-8 font-mono text-lg leading-relaxed text-neutral-300">
              &gt; Standartları reddediyoruz. <br />
              Kaos ve düzen arasındaki ince çizgide, nöral ağların sınırlarını zorlayan algoritmalar geliştiriyoruz.
            </p>

            <button
              type="button"
              className="w-full border-2 border-transparent bg-white px-8 py-4 font-mono font-bold text-lg text-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] hover:bg-cyan-400 hover:shadow-[6px_6px_0px_0px_rgba(34,211,238,0.6)] hover:border-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:w-auto"
            >
              SİSTEME_GİRİŞ()
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
