import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus("loading");
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-white tracking-tight">Kontakt</h2>
          <p className="mt-2 text-blue-200/80">Schreiben Sie uns – wir melden uns schnell bei Ihnen.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Ihr Name" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400/60" />
            <input name="email" type="email" required placeholder="Ihre E-Mail" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400/60" />
            <input name="phone" placeholder="Telefon (optional)" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400/60 sm:col-span-2" />
            <textarea name="message" required placeholder="Ihre Nachricht" rows="4" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400/60 sm:col-span-2" />
            <button disabled={status==="loading"} className="sm:col-span-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white font-semibold hover:brightness-110 transition">
              {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
            </button>
          </form>

          {status === "success" && <p className="mt-4 text-green-400">Vielen Dank! Ihre Nachricht wurde gesendet.</p>}
          {status === "error" && <p className="mt-4 text-red-400">Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.</p>}
        </div>
      </div>
    </section>
  );
}
