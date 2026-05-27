'use client'
import { motion } from 'framer-motion'
import {
  Code2, Terminal, Layers, Database,
  BookOpen, Cpu, Globe, Palette
} from 'lucide-react'
import { Course } from '@/lib/types'
import AnimatedProgressBar from './AnimatedProgressBar'
const iconMap: Record<string, React.ElementType> = {
  'code-2': Code2,
  'terminal': Terminal,
  'layers': Layers,
  'database': Database,
  'cpu': Cpu,
  'globe': Globe,
  'palette': Palette,
  'book': BookOpen,
}
const cardGradients = [
  'from-[#13102a] to-bg-card',
  'from-[#0a1628] to-bg-card',
  'from-[#0a1e1e] to-bg-card',
  'from-[#1a1008] to-bg-card',
]
const accentColors = ['#7C3AED', '#4F46E5', '#06B6D4', '#F59E0B']
interface Props {
  course: Course
  index: number
}
export default function CourseCard({ course, index }: Props) {
  const Icon = iconMap[course.icon_name] ?? BookOpen
  const gradient = cardGradients[index % cardGradients.length]
  const accent = accentColors[index % accentColors.length]
  return (
    <motion.article
      className={`relative rounded-2xl border border-bg-border bg-gradient-to-br ${gradient} overflow-hidden bento-card cursor-pointer`}
      whileHover={{
        scale: 1.02,
        borderColor: `${accent}40`,
        boxShadow: `0 0 30px ${accent}20`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div className="relative z-10 p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${accent}20` }}
          >
            <Icon size={18} style={{ color: accent }} />
          </div>
          <span className="text-slate-400 text-sm font-medium">{course.progress}%</span>
        </div>
        <div>
          <h3 className="text-slate-100 font-semibold text-sm leading-snug mb-1">
            {course.title}
          </h3>
          <p className="text-slate-500 text-xs">Continue learning</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <AnimatedProgressBar value={course.progress} color={accent} />
          <div className="flex justify-between">
            <span className="text-slate-600 text-xs">Progress</span>
            <span className="text-slate-400 text-xs">{course.progress}/100</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
