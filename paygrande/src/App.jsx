import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardShowcase from './components/CardShowcase'
import FeaturesSection from './components/FeaturesSection'
import BenefitsSection from './components/BenefitsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <CardShowcase />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
