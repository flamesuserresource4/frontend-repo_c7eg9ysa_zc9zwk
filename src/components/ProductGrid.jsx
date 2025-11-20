import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductGrid({ products, loading=false }){
  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 p-4 animate-pulse">
            <div className="h-40 bg-slate-200 rounded-xl" />
            <div className="h-4 bg-slate-200 rounded w-3/4 mt-4" />
            <div className="h-4 bg-slate-200 rounded w-1/2 mt-2" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((p, i) => (
        <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }}
          className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all">
          <Link to={`/products/${p.id}`} className="block">
            <div className="relative overflow-hidden rounded-xl">
              <img src={p.images[0]} alt={p.title} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-900">{p.title}</h3>
                <div className="font-semibold">${p.price}</div>
              </div>
              <p className="text-sm text-slate-600">⭐ {p.rating} · {p.reviews} reviews</p>
            </div>
          </Link>
          <div className="mt-3 flex gap-2">
            <Link to={`/products/${p.id}`} className="flex-1 inline-flex justify-center px-3 py-2 rounded-lg bg-slate-900 text-white">View</Link>
            <button className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200">Add</button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
