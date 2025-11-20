export default function About() {
  return (
    <section id="ueber-uns" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Persönlich. Erfahren. Vor Ort.</h2>
        <p className="mt-4 text-blue-200/85 text-lg leading-relaxed">
          Seit über 20 Jahren bieten wir kompetente IT-Unterstützung für Firmen und Privatkunden. Wir setzen auf klare Beratung, schnelle Hilfe und Lösungen, die zu Ihnen passen.
        </p>
      </div>
    </section>
  );
}
