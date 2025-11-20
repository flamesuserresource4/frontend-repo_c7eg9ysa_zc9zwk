import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 h-full grid content-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-900 text-white text-xs/none mb-4">New • Spring Collection</span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">Premium electronics designed to feel invisible</h1>
          <p className="mt-4 text-slate-600 text-lg">Quietly powerful tools with minimalist aesthetics. Built for creators, gamers, and everyday simplicity.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="/products" className="inline-flex px-5 py-3 rounded-xl bg-slate-900 text-white hover:translate-y-[-1px] active:translate-y-[0px] transition-transform">Shop now</a>
            <a href="#highlights" className="inline-flex px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">Explore</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
