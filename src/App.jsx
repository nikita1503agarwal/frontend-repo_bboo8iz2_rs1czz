import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} COMPHILFE – IT-Service & Support. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  )
}

export default App
