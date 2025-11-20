import { useEffect, useMemo, useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import { categories, products as data } from '../data/products'
import { motion } from 'framer-motion'

export default function Products(){
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const [sort, setSort] = useState('popular')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const c = params.get('cat')
    if (c) setCat(c)
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => {
    let items = data.filter(p => (cat==='all' || p.category===cat) && p.title.toLowerCase().includes(query.toLowerCase()))
    if (sort==='price-asc') items.sort((a,b)=>a.price-b.price)
    if (sort==='price-desc') items.sort((a,b)=>b.price-a.price)
    if (sort==='rating') items.sort((a,b)=>b.rating-a.rating)
    return items
  }, [query, cat, sort])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products" className="w-64 max-w-[80vw] px-4 py-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur outline-none focus:ring-2 focus:ring-slate-900/10" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <button onClick={()=>setCat('all')} className={`px-3 py-2 rounded-lg border ${cat==='all'?'bg-slate-900 text-white border-slate-900':'border-slate-200 bg-white'}`}>All</button>
          {categories.map(c => (
            <button key={c.id} onClick={()=>setCat(c.id)} className={`px-3 py-2 rounded-lg border ${cat===c.id?'bg-slate-900 text-white border-slate-900':'border-slate-200 bg-white'}`}>{c.name}</button>
          ))}
        </div>

        <div className="ml-auto">
          <select value={sort} onChange={e=>setSort(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white">
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <ProductGrid products={filtered} loading={loading} />
      </motion.div>
    </div>
  )
}
