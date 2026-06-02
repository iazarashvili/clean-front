import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import HowItWorks from './components/HowItWorks/HowItWorks'
import CTABanner from './components/CTABanner/CTABanner'
import Footer from './components/Footer/Footer'
import ContactModal from './components/ContactModal/ContactModal'
import CookieConsent from './components/CookieConsent/CookieConsent'
import LegalModal from './components/LegalModal/LegalModal'
import type { LegalKey } from './components/LegalModal/legalContent'

function App() {
  const [legalKey, setLegalKey] = useState<LegalKey | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Services onSelectService={setSelectedService} />
      <WhyUs />
      <HowItWorks />
      <CTABanner />
      <Footer onOpenLegal={setLegalKey} />
      {selectedService && (
        <ContactModal
          selectedService={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
      <CookieConsent onOpenPrivacy={() => setLegalKey('datenschutz')} />
      <LegalModal activeKey={legalKey} onClose={() => setLegalKey(null)} />
    </>
  )
}

export default App
