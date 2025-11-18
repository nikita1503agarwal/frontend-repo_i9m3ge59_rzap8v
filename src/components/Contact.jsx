import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // In a real app this would post to backend. For now we just simulate.
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! We\'ll reach out within 24 hours.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Request a free concept</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">Tell us about your space, brand and timeline.</p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-white/80">Name</label>
            <input required className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-orange-400" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">Company</label>
            <input required className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-orange-400" placeholder="Acme BV" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-white/80">Email</label>
            <input required type="email" className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-orange-400" placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-white/80">Spaces & Goals</label>
            <textarea rows={4} className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-orange-400" placeholder="Reception area, 3 meeting rooms, cafeteria. We want a calm, modern atmosphere..." />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <button className="rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-400">Send</button>
          <span className="text-sm text-white/70">{status}</span>
        </div>
      </motion.form>

      <p className="mt-6 text-center text-xs text-white/50">By sending, you agree to our terms and privacy policy.</p>
    </section>
  );
}

export default Contact;
