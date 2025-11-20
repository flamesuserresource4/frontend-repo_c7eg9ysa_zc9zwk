import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Categories from '../components/Categories'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'

export default function Home(){
  return (
    <div>
      <Hero />
      <Highlights />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Best sellers</h2>
          <a href="/products" className="text-slate-600 hover:text-slate-900 transition-colors">See more</a>
        </div>
        <ProductGrid products={products} />
      </section>

      <Categories />
    </div>
  )
}
