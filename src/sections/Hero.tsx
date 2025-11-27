import { motion } from 'framer-motion'
import { ProfileImage } from '../components/ProfileImage'
import { RoleCarousel } from '../components/RoleCarousel'
import { personalInfo } from '../data/personal'
import { useLanguage } from '../contexts/LanguageContext'

export const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Section - Profile */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileImage src={personalInfo.photo} alt={personalInfo.name} />

            <div className="mt-8 text-center">
              <motion.p
                className="text-2xl md:text-3xl text-gray-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t('hero.hello')}
              </motion.p>

              <motion.p
                className="text-2xl md:text-3xl text-gray-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {t('hero.iAm')}
              </motion.p>

              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                  {personalInfo.name}
                </h1>

                {/* Animated underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 rounded-full mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 1, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Roles */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RoleCarousel roles={personalInfo.roles} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
