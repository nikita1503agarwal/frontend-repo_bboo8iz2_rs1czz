import { Shield, Cloud, Network, Wrench } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "IT-Sicherheit",
    desc: "Schutz vor Viren, Backups, Firewall & Awareness-Training",
  },
  {
    icon: Wrench,
    title: "Computerhilfe",
    desc: "Schnelle Hilfe bei PC-, Mac- und Notebook-Problemen",
  },
  {
    icon: Network,
    title: "Netzwerke & WLAN",
    desc: "Planung, Einrichtung und Optimierung Ihrer Infrastruktur",
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    desc: "E-Mail, Zusammenarbeit und Datenspeicher aus der Cloud",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Unsere Leistungen</h2>
          <p className="mt-3 text-blue-200/80">Alles, was Sie für eine sichere und effiziente IT benötigen.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 transition shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
