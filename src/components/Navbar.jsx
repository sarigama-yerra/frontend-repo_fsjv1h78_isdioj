import { useState } from 'react'
import { Menu, Ship } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#features' },
    { label: 'Network', href: '#network' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <Ship size={18} />
          </span>
          <span className="text-xl font-semibold tracking-tight">Zaraq</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3 bg-white rounded-lg border border-slate-200 p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md text-center"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
