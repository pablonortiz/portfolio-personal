import { motion } from 'framer-motion'
import { GraduationCap, Languages, Briefcase, Rocket, Award, BookOpen, type LucideIcon } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'

interface TimelineItemData {
  id: number
  year: string
  titleKey?: string
  descriptionKey?: string
  title: string
  description: string
  type: 'education' | 'work'
  logo: string
}

interface TimelineItemProps {
  item: TimelineItemData
  index: number
  isEven: boolean
}

// Map timeline items to professional icons
const getTimelineIcon = (item: TimelineItemData): { Icon: LucideIcon; gradient: string; bgGradient: string } => {
  // Check title keywords for more specific icons
  const titleLower = item.title.toLowerCase()

  if (titleLower.includes('inglés') || titleLower.includes('english') || titleLower.includes('idioma')) {
    return {
      Icon: Languages,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgGradient: 'from-blue-500/20 to-purple-500/20'
    }
  }

  if (titleLower.includes('secundaria') || titleLower.includes('universidad') || titleLower.includes('curso')) {
    return {
      Icon: GraduationCap,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      bgGradient: 'from-emerald-500/20 to-cyan-500/20'
    }
  }

  if (titleLower.includes('certificado') || titleLower.includes('certificación')) {
    return {
      Icon: Award,
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/20'
    }
  }

  // Default by type
  if (item.type === 'education') {
    return {
      Icon: BookOpen,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-500/20 to-rose-500/20'
    }
  }

  // Work items - check for keywords
  if (titleLower.includes('senior') || titleLower.includes('lead') || titleLower.includes('principal')) {
    return {
      Icon: Rocket,
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      bgGradient: 'from-red-500/20 to-yellow-500/20'
    }
  }

  // Default work icon
  return {
    Icon: Briefcase,
    gradient: 'from-primary-500 via-purple-500 to-pink-500',
    bgGradient: 'from-primary-500/20 to-pink-500/20'
  }
}

// Professional icon component with animations
const TimelineIcon = ({ item, isInView }: { item: TimelineItemData; isInView: boolean }) => {
  const { Icon, gradient, bgGradient } = getTimelineIcon(item)

  return (
    <motion.div
      className="relative z-10 shrink-0"
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.4, delay: 0.4, type: 'spring' }}
    >
      {/* Outer glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} blur-xl opacity-40`}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main icon container */}
      <motion.div
        className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${gradient} p-[3px] shadow-2xl`}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Inner circle with icon */}
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
      </motion.div>

      {/* Animated ring */}
      <motion.div
        className={`absolute inset-0 rounded-full border-2 border-primary-400/30`}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.div>
  )
}

export const TimelineItem = ({ item, index, isEven }: TimelineItemProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const { t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center">
        {isEven ? (
          <>
            {/* Content Left */}
            <motion.div
              className="flex-1 pr-12 text-right"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-600/20 text-primary-400 text-sm font-semibold mb-3">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.titleKey ? t(item.titleKey) : item.title}</h3>
                <p className="text-gray-400">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
              </div>
            </motion.div>

            {/* Center Icon */}
            <TimelineIcon item={item} isInView={isInView} />

            {/* Empty Right */}
            <div className="flex-1 pl-12" />
          </>
        ) : (
          <>
            {/* Empty Left */}
            <div className="flex-1 pr-12" />

            {/* Center Icon */}
            <TimelineIcon item={item} isInView={isInView} />

            {/* Content Right */}
            <motion.div
              className="flex-1 pl-12 text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-600/20 text-primary-400 text-sm font-semibold mb-3">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.titleKey ? t(item.titleKey) : item.title}</h3>
                <p className="text-gray-400">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-6">
        {/* Icon */}
        <TimelineIcon item={item} isInView={isInView} />

        {/* Content */}
        <motion.div
          className="flex-1 pb-8"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-600/20 text-primary-400 text-sm font-semibold mb-3">
            {item.year}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{item.titleKey ? t(item.titleKey) : item.title}</h3>
          <p className="text-gray-400 text-sm">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
