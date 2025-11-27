import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Home, ArrowLeft, ExternalLink, Play, Heart, Dumbbell, FileText, Factory, Sparkles, LucideIcon } from 'lucide-react'
import { VideoModal } from './VideoModal'
import { useLanguage } from '../contexts/LanguageContext'

interface Project {
  id: number
  titleKey?: string
  descriptionKey?: string
  title: string
  description: string
  image: string
  link: string
  type: 'web' | 'mobile'
  icon?: string // Nombre del icono de lucide-react (ej: "Heart") o ruta a imagen (ej: "/projects/icons/app.png")
  appetizeUrl?: string // URL del emulador de Appetize.io
  videoUrl?: string // URL del video de demostración
}

// Mapa de iconos disponibles
const iconMap: Record<string, LucideIcon> = {
  Heart,
  Home,
  Dumbbell,
  FileText,
  Factory,
  Sparkles,
}

interface PhoneEmulatorProps {
  projects: Project[]
}

export const PhoneEmulator = ({ projects }: PhoneEmulatorProps) => {
  const { t } = useLanguage()
  const [selectedApp, setSelectedApp] = useState<number | null>(null)
  const [time, setTime] = useState('')
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; description: string } | null>(null)

  // Helper para determinar si el icon es una imagen o un icono de lucide-react
  const isImageIcon = (icon?: string) => {
    if (!icon) return false
    return icon.startsWith('/') || icon.startsWith('http')
  }

  // Componente para renderizar el icono (imagen o lucide-react)
  const renderIcon = (icon?: string, size: 'small' | 'medium' | 'large' = 'medium') => {
    if (!icon) {
      // Fallback al emoji si no hay icono
      const sizeMap = { small: 'text-4xl', medium: 'text-5xl', large: 'text-6xl' }
      return <span className={sizeMap[size]}>📱</span>
    }

    if (isImageIcon(icon)) {
      // Es una imagen - ocupa todo el contenedor con bordes redondeados
      return <img src={icon} alt="App icon" className="w-full h-full object-contain rounded-2xl p-1" />
    }

    // Es un icono de lucide-react - tamaños más grandes
    const IconComponent = iconMap[icon]
    if (IconComponent) {
      const sizeMap = { small: 'w-10 h-10', medium: 'w-11 h-11', large: 'w-14 h-14' }
      return <IconComponent className={`${sizeMap[size]} text-white`} strokeWidth={1.5} />
    }

    // Fallback si no se encuentra el icono
    const sizeMap = { small: 'text-4xl', medium: 'text-5xl', large: 'text-6xl' }
    return <span className={sizeMap[size]}>📱</span>
  }

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date()
      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleAppClick = (projectId: number) => {
    // Always open the app view instead of modal
    setSelectedApp(projectId)
  }

  const handleHomeClick = () => {
    setSelectedApp(null)
  }

  const handleBackClick = () => {
    setSelectedApp(null)
  }

  const handleVideoClick = () => {
    if (currentApp?.videoUrl) {
      setSelectedVideo({
        url: currentApp.videoUrl,
        title: currentApp.titleKey ? t(currentApp.titleKey) : currentApp.title,
        description: currentApp.descriptionKey ? t(currentApp.descriptionKey) : currentApp.description
      })
      setVideoModalOpen(true)
    }
  }

  if (projects.length === 0) {
    return null
  }

  const currentApp = selectedApp !== null ? projects.find(p => p.id === selectedApp) : null

  // App icon colors for visual variety
  const iconColors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-green-500 to-green-600',
    'from-orange-500 to-orange-600',
    'from-red-500 to-red-600',
  ]

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30" />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-gradient-to-b from-black/50 to-transparent z-20 px-6 pt-2 flex justify-between items-start text-white text-[10px]">
          <span>{time}</span>
          <div className="flex gap-1">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Screen */}
        <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedApp === null ? (
              // Home Screen
              <motion.div
                key="home"
                className="absolute inset-0 pt-10 pb-16 px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Home Screen Header */}
                <div className="text-white text-center mb-6 mt-2">
                  <h3 className="text-lg font-semibold">{t('phone.myApps')}</h3>
                  <p className="text-xs text-gray-300 mt-1">{t('phone.tapToExplore')}</p>
                </div>

                {/* App Grid */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {projects.map((project, index) => (
                    <motion.button
                      key={project.id}
                      onClick={() => handleAppClick(project.id)}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* App Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconColors[index % iconColors.length]} shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow`}>
                        {renderIcon(project.icon, 'medium')}
                      </div>
                      {/* App Name */}
                      <span className="text-white text-[10px] text-center leading-tight max-w-[60px] truncate">
                        {project.titleKey ? t(project.titleKey) : project.title}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // App View
              <motion.div
                key="app"
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3 }}
              >
                {currentApp && (
                  <>
                    {currentApp.appetizeUrl ? (
                      // Appetize.io Emulator View
                      <div className="flex flex-col h-full pt-8 pb-16">
                        {/* App Header */}
                        <div className="flex items-center gap-3 mb-4 px-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColors[projects.findIndex(p => p.id === currentApp.id) % iconColors.length]} shadow-lg flex items-center justify-center`}>
                            {renderIcon(currentApp.icon, 'small')}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 font-bold text-base">{currentApp.titleKey ? t(currentApp.titleKey) : currentApp.title}</h3>
                            <p className="text-xs text-gray-500">{t('phone.liveEmulator')}</p>
                          </div>
                        </div>

                        {/* Appetize.io Iframe */}
                        <div className="flex-1 w-full bg-gray-100 relative overflow-hidden">
                          <iframe
                            src={currentApp.appetizeUrl}
                            className="w-full h-full border-0"
                            allow="camera; microphone; geolocation; clipboard-write"
                            title={`Emulador de ${currentApp.title}`}
                          />
                        </div>

                        {/* Bottom Info */}
                        <div className="px-4 pt-3">
                          <motion.a
                            href={currentApp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="w-3 h-3" />
                            {t('phone.viewGithub')}
                          </motion.a>
                        </div>
                      </div>
                    ) : (
                      // App Info View (fallback si no hay Appetize.io)
                      <div className="flex flex-col h-full pt-8 px-4 pb-16">
                        {/* App Header */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconColors[projects.findIndex(p => p.id === currentApp.id) % iconColors.length]} shadow-lg flex items-center justify-center`}>
                            {renderIcon(currentApp.icon, 'large')}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 font-bold text-lg">{currentApp.titleKey ? t(currentApp.titleKey) : currentApp.title}</h3>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <span>★★★★★</span>
                              <span>4.8</span>
                            </div>
                          </div>
                        </div>

                        {/* App Info */}
                        <div className="flex-1 overflow-y-auto">
                          {/* Video Preview si existe */}
                          {currentApp.videoUrl && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('phone.videoDemo')}</h4>
                              <div className="relative rounded-lg overflow-hidden bg-black shadow-lg">
                                <video
                                  src={currentApp.videoUrl}
                                  controls
                                  className="w-full h-auto"
                                  poster={currentApp.image}
                                  preload="metadata"
                                >
                                  Tu navegador no soporta el elemento de video.
                                </video>
                              </div>
                            </div>
                          )}

                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('phone.aboutApp')}</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {currentApp.descriptionKey ? t(currentApp.descriptionKey) : currentApp.description}
                            </p>
                          </div>

                          {/* App Info Details */}
                          <div className="space-y-3 border-t pt-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">{t('phone.version')}</span>
                              <span className="text-gray-900 font-medium">1.0.0</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">{t('phone.size')}</span>
                              <span className="text-gray-900 font-medium">25 MB</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">{t('phone.category')}</span>
                              <span className="text-gray-900 font-medium">{t('phone.productivity')}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-4 space-y-2">
                          {currentApp.videoUrl && (
                            <motion.button
                              onClick={handleVideoClick}
                              className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Play className="w-4 h-4" />
                              {t('phone.fullscreen')}
                            </motion.button>
                          )}
                          {currentApp.link && (
                            <motion.a
                              href={currentApp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              {t('phone.viewGithub')}
                            </motion.a>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Android Navigation Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-black/90 backdrop-blur-sm z-20 flex items-center justify-around px-8">
            <motion.button
              onClick={handleBackClick}
              className={`p-2 rounded-full transition-colors ${selectedApp !== null ? 'text-white hover:bg-white/10' : 'text-gray-600'}`}
              disabled={selectedApp === null}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={handleHomeClick}
              className="w-12 h-1 bg-white rounded-full hover:bg-gray-300 transition-colors"
              whileTap={{ scale: 0.9 }}
            />

            <motion.button
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 border-2 border-white rounded-md" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  )
}
