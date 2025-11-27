import { useState } from 'react'
import { motion } from 'framer-motion'

interface ProfileImageProps {
  src: string
  alt: string
}

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleClick = () => {
    setIsSpinning(!isSpinning)
  }

  return (
    <div className="relative">
      {/* Decorative frame - top */}
      <div className="absolute -top-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Image container */}
      <motion.div
        className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer group"
        style={{ perspective: '1000px' }}
        onClick={handleClick}
        onHoverStart={() => setIsSpinning(true)}
        onHoverEnd={() => setIsSpinning(false)}
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-primary-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

        {/* Spinning 3D container */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-primary-600 p-1"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateY: isSpinning ? 360 : 0,
          }}
          transition={{
            duration: 3,
            repeat: isSpinning ? Infinity : 0,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full rounded-full bg-black p-2">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback placeholder
                  const target = e.target as HTMLImageElement
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Crect width='256' height='256' fill='%23a855f7'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='120' fill='white'%3EPO%3C/text%3E%3C/svg%3E`
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative frame - bottom */}
      <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
    </div>
  )
}
