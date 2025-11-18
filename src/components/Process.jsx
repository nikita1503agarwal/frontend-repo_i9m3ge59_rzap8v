import { motion } from 'framer-motion';

const steps = [
  {
    k: '1',
    title: 'Discovery Call',
    desc: 'Understand your brand, spaces and visitors. Define mood, styles and constraints.'
  },
  {
    k: '2',
    title: 'Concepts in 48h',
    desc: 'We craft multiple AI directions matched to your identity and use‑case.'
  },
  {
    k: '3',
    title: 'Refine & Approve',
    desc: 'Iterate quickly with your team. Select final directions for each location.'
  },
  {
    k: '4',
    title: 'Deliver & Install',
    desc: 'High‑res digital files ready for screens, canvases or lightboxes.'
  }
];

function Process() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">A fast, collaborative process</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">From brief to installed art in days.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 text-white backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20 text-sm font-bold text-orange-300">
              {s.k}
            </div>
            <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-white/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Process;
