import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Code2, Layers, Sparkles } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { useLanguage } from '../contexts/LanguageContext'

interface Role {
  key: string
  text: string
}

interface RoleCarouselProps {
  roles: Role[]
}

// Professional role illustrations with icons
const RoleIllustration = ({ index }: { index: number }) => {
  const illustrations = [
    {
      // Mobile Developer
      Icon: Smartphone,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      particles: [
        { top: '20%', left: '15%', delay: 0 },
        { top: '60%', right: '20%', delay: 0.2 },
        { top: '80%', left: '30%', delay: 0.4 },
      ]
    },
    {
      // Software Developer
      Icon: Code2,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      particles: [
        { top: '25%', right: '15%', delay: 0.1 },
        { top: '55%', left: '25%', delay: 0.3 },
        { top: '75%', right: '25%', delay: 0.5 },
      ]
    },
    {
      // Full Stack Developer
      Icon: Layers,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-500/20 to-amber-500/20',
      particles: [
        { top: '30%', left: '20%', delay: 0.15 },
        { top: '50%', right: '15%', delay: 0.25 },
        { top: '70%', left: '35%', delay: 0.45 },
      ]
    }
  ]

  const current = illustrations[index % illustrations.length]
  const { Icon, gradient, bgGradient, particles } = current

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-30`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-400/40"
          style={{ top: particle.top, left: particle.left, right: particle.right }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main icon container with glow effect */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} blur-2xl opacity-50`}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Icon background circle */}
        <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${gradient} p-1 shadow-2xl`}>
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <Icon className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Sparkle effects */}
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles className="w-6 h-6 text-primary-400" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -left-2"
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        >
          <Sparkles className="w-5 h-5 text-primary-300" />
        </motion.div>
      </motion.div>

      {/* Code brackets decoration */}
      <motion.div
        className="absolute top-4 left-4 text-3xl font-bold text-primary-500/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {'<'}
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 text-3xl font-bold text-primary-500/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        {'>'}
      </motion.div>
    </div>
  )
}

export const RoleCarousel = ({ roles }: RoleCarouselProps) => {
  const { t } = useLanguage()

  // Translate roles to current language
  const translatedRoles = roles.map(role => t(role.key))

  // Hook sincronizado que maneja tanto el typing como el índice
  const { displayText, currentIndex } = useTypingEffect(translatedRoles, 80, 40, 1500)

  return (
    <div className="flex flex-col items-center lg:items-start space-y-6">
      <motion.p
        className="text-2xl md:text-3xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {t('hero.iAmA')}
      </motion.p>

      {/* Illustration Carousel Card */}
      <div className="relative w-full max-w-md h-64 md:h-72 rounded-2xl overflow-hidden card-gradient border border-primary-500/20 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ x: 300, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -300, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <RoleIllustration index={currentIndex} />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Typing Effect Text */}
      <div className="h-20 flex items-center">
        <motion.div
          className="text-3xl md:text-4xl font-bold text-gradient pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {displayText}
          <motion.span
            className="inline-block w-1 h-8 md:h-10 bg-primary-500 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
