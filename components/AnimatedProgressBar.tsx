'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
interface Props {
  value: number
  color?: string
}
export default function AnimatedProgressBar({ value, color = '#7C3AED' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="w-full">
      <div className="w-full h-1.5 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full origin-left"
          style={{ backgroundColor: color }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: value / 100 } : {}}
          transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.1 }}
        />
      </div>
    </div>
  )
}
