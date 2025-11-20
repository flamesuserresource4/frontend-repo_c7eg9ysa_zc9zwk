import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initial = [
  { id: 'p1', title: 'NovaBook X1 Pro', price: 1799, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop', qty: 1 },
  { id: 'p3', title: 'Nimbus ANC Headphones', price: 349, img: 'https://images.unsplash.com/photo-1518441902112-f0e5f1b2b0f3?q=80&w=1600&auto=format&fit=crop', qty: 2 }
]

export default function Cart(){
  const [items, setItems] = useState(initial)

  const updateQty = (id, delta) => setItems(prev => prev.map(i => i.id===id ? { ...i, qty: Math.max(1, i.qty+delta) } : i))
  const remove = (id) => setItems(prev => prev.filter(i => i.id!==id))
  const total = items.reduce((s,i)=>s+i.price*i.qty,0)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Cart</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <AnimatePresence initial={false}>
            {items.map(item => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border border-slate-200 bg-white/70 p-4 flex gap-4 items-center">
                <img src={item.img} className="w-20 h-16 object-cover rounded-lg" alt="" />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-slate-600">${item.price}</div>
                </div>
                <div className="inline-flex items-center rounded-xl border border-slate-200 overflow-hidden">
                  <button onClick={()=>updateQty(item.id,-1)} className="px-3 py-2 hover:bg-slate-50">-</button>
                  <span className="px-4">{item.qty}</span>
                  <button onClick={()=>updateQty(item.id,1)} className="px-3 py-2 hover:bg-slate-50">+</button>
                </div>
                <button onClick={()=>remove(item.id)} className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200">Remove</button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 h-fit sticky top-24">
          <div className="flex items-center justify-between">
            <div className="text-slate-600">Subtotal</div>
            <div className="font-semibold">${total.toFixed(2)}</div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-slate-600">Shipping</div>
            <div className="font-semibold">Free</div>
          </div>
          <div className="mt-4 flex items-center justify-between text-lg">
            <div className="font-medium">Total</div>
            <div className="font-semibold">${total.toFixed(2)}</div>
          </div>
          <button className="mt-6 w-full px-4 py-3 rounded-xl bg-slate-900 text-white">Checkout</button>
        </div>
      </div>
    </div>
  )
}
