import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-xl shadow-lg">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.45)]" />
            <div className="leading-tight">
              <div className="text-white font-semibold text-lg tracking-tight">COMPHILFE</div>
              <div className="text-xs text-blue-200/70">IT-Service & Support</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="hover:text-white transition-colors">{i.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-[0_12px_24px_-6px_rgba(59,130,246,0.45)] hover:brightness-110 transition">
              <Phone size={16} />
              Jetzt anfragen
            </a>
          </div>

          <button className="md:hidden text-blue-100" onClick={() => setOpen((v) => !v)} aria-label="Menü">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-3 text-blue-100">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/5">
                {i.label}
              </a>
            ))}
            <a href="#kontakt" className="mt-2 block w-full text-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white font-medium">Jetzt anfragen</a>
          </div>
        )}
      </div>
    </header>
  );
}
