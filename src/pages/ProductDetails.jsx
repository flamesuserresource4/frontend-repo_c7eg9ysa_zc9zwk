import { useParams, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { getProductById } from '../data/products'
import { motion } from 'framer-motion'

export default function ProductDetails(){
  const { id } = useParams()
  const product = useMemo(()=>getProductById(id), [id])
  const [img, setImg] = useState(0)
  const [qty, setQty] = useState(1)

  if (!product) return <div className="mx-auto max-w-7xl px-4 py-10">Not found</div>

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70">
            <img src={product.images[img]} alt={product.title} className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-[1.02]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((src, i) => (
              <button key={i} onClick={()=>setImg(i)} className={`relative rounded-xl overflow-hidden border ${i===img?'border-slate-900':'border-transparent'}`}>
                <img src={src} className="w-24 h-16 object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{product.title}</h1>
          <p className="text-slate-600 mt-2">{product.description}</p>

          <div className="mt-4 flex items-center gap-3">
            <div className="text-2xl font-semibold">${product.price}</div>
            <div className="text-sm text-slate-600">⭐ {product.rating} · {product.reviews} reviews</div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
            <div className="col-span-2">
              <label className="text-sm text-slate-600">Quantity</label>
              <div className="mt-1 inline-flex items-center rounded-xl border border-slate-200 overflow-hidden">
                <button onClick={()=>setQty(q=>Math.max(1,q-1))} className="px-3 py-2 hover:bg-slate-50">-</button>
                <span className="px-4">{qty}</span>
                <button onClick={()=>setQty(q=>q+1)} className="px-3 py-2 hover:bg-slate-50">+</button>
              </div>
            </div>
            <motion.button whileTap={{ scale: 0.98 }} className="px-4 py-3 rounded-xl bg-slate-900 text-white">Add to Cart</motion.button>
            <Link to="/cart" className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-center">Go to Cart</Link>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold mb-3">Specifications</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([k,v]) => (
                <div key={k} className="rounded-xl border border-slate-200 bg-white/70 p-3">
                  <div className="text-xs text-slate-500">{k}</div>
                  <div className="font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold mb-3">Customer Reviews</h2>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <p className="text-slate-600">“Fantastic build quality and performance. Battery life is stellar.” — Alex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
