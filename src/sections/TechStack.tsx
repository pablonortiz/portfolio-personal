import { motion } from 'framer-motion'
import { InfiniteSlider } from '../components/InfiniteSlider'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { PhoneEmulator } from '../components/PhoneEmulator'
import { technologies, projects } from '../data/personal'
import { useLanguage } from '../contexts/LanguageContext'

export const TechStack = () => {
  const { t } = useLanguage()
  const mobileProjects = projects.filter(p => p.type === 'mobile')
  const webProjects = projects.filter(p => p.type === 'web')

  return (
    <section id="proyectos" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 pb-2">
            {t('tech.title')}
          </h2>
          <p className="text-gray-400 text-lg pb-1">
            {t('tech.subtitle')}
          </p>
        </motion.div>

        {/* Infinite Tech Slider */}
        <InfiniteSlider items={technologies} />

        {/* Projects Section */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Projects Grid - Left */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient pb-2">
                {t('tech.myProjects')}
              </h3>
              <ProjectsGrid projects={webProjects} />
            </motion.div>

            {/* Phone Emulator - Right */}
            <motion.div
              className="w-full lg:w-auto flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PhoneEmulator projects={mobileProjects} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
