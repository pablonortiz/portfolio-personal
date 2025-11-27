import { Hero } from './sections/Hero'
import { TechStack } from './sections/TechStack'
import { Journey } from './sections/Journey'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { LanguageSwitcher } from './components/LanguageSwitcher'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <LanguageSwitcher />
        <Hero />
        <TechStack />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
