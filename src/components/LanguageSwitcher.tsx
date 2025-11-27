import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative bg-white/10 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/20">
        <div className="relative flex gap-1">
          {/* Background slider */}
          <motion.div
            className="absolute inset-y-1 w-[calc(50%-0.125rem)] bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
            initial={false}
            animate={{
              x: language === 'es' ? 0 : 'calc(100% + 0.25rem)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />

          {/* ES Button */}
          <button
            onClick={() => setLanguage('es')}
            className={`relative z-10 px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              language === 'es' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            ES
          </button>

          {/* EN Button */}
          <button
            onClick={() => setLanguage('en')}
            className={`relative z-10 px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              language === 'en' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  )
}
