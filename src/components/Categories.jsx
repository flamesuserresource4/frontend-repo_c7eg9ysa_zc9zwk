import { motion } from 'framer-motion'
import { categories } from '../data/products'

export default function Categories(){
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold tracking-tight">Featured categories</h2>
        <a href="/products" className="text-slate-600 hover:text-slate-900 transition-colors">View all</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((c, i) => (
          <motion.a key={c.id} href={`/products?cat=${c.id}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }}
            className={`group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5`}
          >
            <div className={`h-24 rounded-xl bg-gradient-to-br ${c.color} mb-4`} />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-slate-600">Explore {c.name.toLowerCase()}</p>
              </div>
              <div className="text-xl">→</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
