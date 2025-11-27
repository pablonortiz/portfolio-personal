import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
  description?: string
}

export const VideoModal = ({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Pause video when modal closes
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpen])

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Detect if URL is YouTube or Vimeo
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
  const isVimeo = videoUrl.includes('vimeo.com')

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be')
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }

  // Convert Vimeo URL to embed format
  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0]
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`
  }

  const embedUrl = isYouTube
    ? getYouTubeEmbedUrl(videoUrl)
    : isVimeo
    ? getVimeoEmbedUrl(videoUrl)
    : null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary-600 to-purple-600 px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                  {description && (
                    <p className="text-sm text-gray-200">{description}</p>
                  )}
                </div>
                <motion.button
                  onClick={onClose}
                  className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative bg-black aspect-video">
              {embedUrl ? (
                // YouTube or Vimeo embed
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={title}
                />
              ) : (
                // Direct video file
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  autoPlay
                  src={videoUrl}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Play className="w-4 h-4" />
                  <span>Demostración del proyecto</span>
                </div>
                <motion.button
                  onClick={onClose}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cerrar
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
