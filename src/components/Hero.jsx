export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">Zuverlässiger IT-Partner seit 2003</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Moderne IT-Lösungen für Unternehmen und Privatkunden
            </h1>
            <p className="mt-5 text-blue-200/90 text-lg leading-relaxed">
              Wir unterstützen Sie bei Computerhilfe, Netzwerken, Cloud, Sicherheit und Web – schnell, persönlich und vor Ort in Ihrer Region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow-[0_12px_24px_-6px_rgba(59,130,246,0.45)] hover:brightness-110 transition">
                Angebot anfordern
              </a>
              <a href="#leistungen" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-white/90 hover:bg-white/5 transition">
                Leistungen entdecken
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25),transparent_60%)] blur-2xl" />
            <img src="/hero-it-support.png" alt="IT Support" className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
