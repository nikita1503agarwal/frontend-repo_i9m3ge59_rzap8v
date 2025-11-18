import { motion } from 'framer-motion';
import { Building2, Sparkles, Gauge, Users } from 'lucide-react';

const items = [
  {
    icon: Building2,
    title: 'Designed for your brand',
    desc: 'We translate your values, colors and story into striking, on‑brand visuals.',
  },
  {
    icon: Sparkles,
    title: 'AI‑powered originality',
    desc: 'State‑of‑the‑art generation ensures every piece is unique and future‑facing.',
  },
  {
    icon: Users,
    title: 'Boosts satisfaction',
    desc: 'Warm, welcoming atmospheres that improve perception and dwell time.',
  },
  {
    icon: Gauge,
    title: 'Fast delivery',
    desc: 'From brief to ready‑to‑install digital art in days, not months.',
  },
];

function Benefits() {
  return (
    <section id="benefits" className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Why businesses choose Artuna.nl</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Tailored, modern and measurable. Built for offices, clinics, hotels and retail spaces.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm"
          >
            <item.icon className="mb-4 h-6 w-6 text-orange-400" />
            <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-white/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
