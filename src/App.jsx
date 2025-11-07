import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
