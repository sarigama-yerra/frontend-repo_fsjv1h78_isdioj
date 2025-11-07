import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6KP2PXWwzZDJ2qVp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            Global Trade Infrastructure
          </p>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Zaraq — The Boat Powering Global Trading
          </h1>
          <p className="mt-6 text-slate-600 text-lg">
            Navigate shipments, routes, and trade-finance in one elegant platform. Real-time visibility across ports and oceans.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700 transition-colors">
              Launch Console
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-md bg-white/70 hover:bg-white transition-colors">
              Explore Features
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
