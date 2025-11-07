export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Zaraq. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#network" className="hover:text-slate-900">Network</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
        </nav>
      </div>
    </footer>
  )
}
