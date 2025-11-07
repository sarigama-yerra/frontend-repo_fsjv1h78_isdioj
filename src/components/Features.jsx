import { Globe, Shield, Radar, Clock } from 'lucide-react'

const items = [
  {
    title: 'Worldwide Coverage',
    desc: 'Live vessel positions, port ETAs, and lane analytics across 180+ countries.',
    icon: Globe,
  },
  {
    title: 'Trusted & Secure',
    desc: 'Bank-grade security and audit trails safeguard documents and payments.',
    icon: Shield,
  },
  {
    title: 'Predictive Insights',
    desc: 'AI forecasts disruption, weather, and congestion to optimize routes.',
    icon: Radar,
  },
  {
    title: 'Real-time Tracking',
    desc: 'Track containers, bills of lading, and customs status with instant alerts.',
    icon: Clock,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for Global Trade</h2>
          <p className="mt-4 text-slate-600">Everything you need to orchestrate ocean freight with clarity and speed.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
