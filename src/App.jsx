import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] text-white">
      {/* Navbar */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
          <div className="h-2 w-2 rounded-full bg-orange-500" />
          <span className="text-sm font-semibold text-white">Artuna.nl</span>
        </div>
        <nav className="pointer-events-auto hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#benefits" className="hover:text-white">Benefits</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Content sections */}
      <div className="relative">
        {/* faint diagonal sheen matching red‑orange theme */}
        <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(251,146,60,0.15),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(251,113,133,0.08),transparent)]" />

        <section id="process">
          <Benefits />
          <Process />
          <Contact />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-white/5 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Artuna.nl — Personalized AI art for business spaces
        </footer>
      </div>
    </div>
  );
}

export default App;
