export default function About(){
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">We craft premium electronics with a minimalist philosophy. Every curve, click, and color is designed to fade into your life—powerful when you need it, invisible when you don’t.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
          <div className="text-sm text-slate-600">Design ethos</div>
          <div className="font-medium">Minimal. Durable. Timeless.</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
          <div className="text-sm text-slate-600">Sustainability</div>
          <div className="font-medium">Recycled materials and repairable parts.</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
          <div className="text-sm text-slate-600">Support</div>
          <div className="font-medium">Fast, human assistance worldwide.</div>
        </div>
      </div>
    </div>
  )
}
