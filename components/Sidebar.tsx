'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  GraduationCap,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Courses', icon: BookOpen },
  { label: 'Progress', icon: BarChart2 },
  { label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth
      if (w >= 768 && w < 1024) {
        setCollapsed(true)
      } else if (w >= 1024) {
        setCollapsed(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <motion.aside
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="hidden md:flex flex-col shrink-0 border-r border-bg-border bg-bg-secondary overflow-hidden relative z-10"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent" />

        <div className="flex items-center gap-3 px-4 py-5 border-b border-bg-border">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-violet to-accent-indigo flex items-center justify-center shrink-0">
            <Zap size={14} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="font-display font-bold text-slate-100 text-lg whitespace-nowrap"
              >
                LearnOS
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.label
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left"
                style={{ color: isActive ? '#e2e8f0' : '#64748b' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-xl bg-white/5 border border-white/8"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <Icon
                  size={18}
                  className="relative z-10 shrink-0"
                  style={{ color: isActive ? '#7C3AED' : '#475569' }}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="relative z-10 whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            )
          })}
        </nav>

        <div className="px-3 py-4 border-t border-bg-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan/80 to-accent-violet/80 flex items-center justify-center shrink-0">
              <GraduationCap size={14} className="text-white" />
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-medium text-slate-200 truncate">Vikas Pandey</p>
                  <p className="text-xs text-slate-500 truncate">vikas@learnos.io</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2 text-xs text-slate-500 hover:text-slate-300 rounded-lg hover:bg-white/5 transition-colors"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </motion.aside>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-bg-border flex items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl"
            >
              <Icon size={20} style={{ color: isActive ? '#7C3AED' : '#475569' }} />
              <span className="text-[10px] font-medium" style={{ color: isActive ? '#7C3AED' : '#475569' }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </>
  )
}