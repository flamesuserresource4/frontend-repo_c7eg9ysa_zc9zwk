export default function Contact(){
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-slate-600">We typically reply within 24 hours.</p>
      <form className="mt-8 grid gap-3">
        <input className="px-4 py-3 rounded-xl border border-slate-200 bg-white/70" placeholder="Name" />
        <input className="px-4 py-3 rounded-xl border border-slate-200 bg-white/70" placeholder="Email" />
        <textarea rows="5" className="px-4 py-3 rounded-xl border border-slate-200 bg-white/70" placeholder="Message" />
        <button className="px-5 py-3 rounded-xl bg-slate-900 text-white max-w-fit">Send</button>
      </form>
    </div>
  )
}
