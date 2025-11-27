import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import * as SimpleIcons from 'react-icons/si'

interface SliderItem {
  name: string
  icon: string
}

type IconComponent = React.ComponentType<{ className?: string }>

interface InfiniteSliderProps {
  items: SliderItem[]
}

export const InfiniteSlider = ({ items }: InfiniteSliderProps) => {
  // Duplicate items many times for true infinite scroll
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items]
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const baseVelocity = -1
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const firstItem = containerRef.current.children[0] as HTMLElement
      if (firstItem) {
        // Calcula el ancho de un item + gap
        setItemWidth(firstItem.offsetWidth + 32) // 32px = gap-8
      }
    }
  }, [items])

  // Animación continua con loop infinito
  useAnimationFrame((_time, delta) => {
    if (itemWidth === 0) return

    let currentX = x.get()
    const singleSetWidth = items.length * itemWidth

    // Loop infinito: cuando pasa un set completo, resetea la posición
    // Esto funciona porque tenemos múltiples copias idénticas
    if (currentX <= -singleSetWidth) {
      x.set(currentX + singleSetWidth)
      currentX = currentX + singleSetWidth
    } else if (currentX > 0) {
      x.set(currentX - singleSetWidth)
      currentX = currentX - singleSetWidth
    }

    // Animación automática solo cuando no se arrastra
    if (!isDragging) {
      const moveBy = baseVelocity * (delta / 16)
      x.set(currentX + moveBy)
    }
  })

  return (
    <div className="relative w-full overflow-hidden py-12 cursor-grab active:cursor-grabbing">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Sliding container */}
      <motion.div
        ref={containerRef}
        className="flex gap-8"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -50000, right: 50000 }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {duplicatedItems.map((item, index) => {
          // Obtener el componente de icono dinámicamente
          const IconComponent = (SimpleIcons as any)[item.icon] as IconComponent

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 px-6 py-5 rounded-xl bg-gradient-to-br from-primary-950/50 to-purple-950/30 border border-primary-500/20 backdrop-blur-sm whitespace-nowrap shrink-0 hover:border-primary-500/40 hover:scale-105 transition-all duration-300"
            >
              {IconComponent && (
                <IconComponent className="text-3xl text-primary-400" />
              )}
              <span className="text-lg font-semibold text-gray-200">
                {item.name}
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
