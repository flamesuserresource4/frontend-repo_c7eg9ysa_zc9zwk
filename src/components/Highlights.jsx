import { motion } from 'framer-motion'
import { Cpu, Battery, Waves, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Cpu, title: 'Performance', text: 'Next‑gen chips and thermal design for sustained speed.' },
  { icon: Battery, title: 'Battery', text: 'Work and play longer with highly optimized batteries.' },
  { icon: Waves, title: 'Connectivity', text: 'Latest wireless standards and high‑bandwidth ports.' },
  { icon: ShieldCheck, title: 'Warranty', text: 'Extended coverage with fast, friendly support.' },
]

export default function Highlights(){
  return (
    <section id="highlights" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }}
            className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white grid place-items-center mb-4">
              <f.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900">{f.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
