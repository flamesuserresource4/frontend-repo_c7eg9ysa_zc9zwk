import { Link, NavLink, Outlet } from 'react-router-dom'
import { ShoppingCart, Menu, Search, Github } from 'lucide-react'
import { useState } from 'react'

export default function Layout() {
  const [open, setOpen] = useState(false)

  const navClass = ({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white grid place-items-center font-bold">E</div>
            <span className="font-semibold tracking-tight">Electra</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/products" className={navClass}>Products</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:translate-y-[-1px] active:translate-y-[0px] transition-transform">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
            <Link to="/cart" className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 text-xs bg-slate-900 text-white rounded-full w-5 h-5 grid place-items-center">2</span>
            </Link>
            <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg hover:bg-slate-100"><Menu className="w-5 h-5" /></button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200/60">
            <nav className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/products" className={navClass}>Products</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={navClass}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navClass}>Contact</NavLink>
            </nav>
          </div>
        )}
      </header>

      <main className="min-h-[70vh]"><Outlet /></main>

      <footer className="border-t border-slate-200/60 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">E</div>
              <span className="font-semibold tracking-tight">Electra</span>
            </div>
            <p className="text-sm text-slate-600">Minimal, premium electronics for modern life.</p>
          </div>
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Electra. All rights reserved.</div>
          <div className="flex justify-start md:justify-end">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white"><Github className="w-4 h-4" /> Star</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
