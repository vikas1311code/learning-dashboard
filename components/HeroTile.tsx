'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Flame, Clock, Trophy } from 'lucide-react'

const stats = [
  { label: 'Day Streak', value: '14', icon: Flame },
  { label: 'This Week', value: '8.5h', icon: Clock },
  { label: 'Total XP', value: '2,840', icon: Trophy },
]

export default function HeroTile() {
  const [greeting, setGreeting] = useState('Good morning')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 17) setGreeting('Good evening')
    else if (hour >= 12) setGreeting('Good afternoon')
    else setGreeting('Good morning')
  }, [])

  return (
    <article className="relative rounded-2xl border border-bg-border bg-gradient-to-br from-bg-card via-[#0f1521] to-bg-primary overflow-hidden bento-card p-6 h-full">
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <p className="text-slate-400 text-sm mb-1">Welcome back — {greeting}</p>
          <h1
            className="text-4xl font-bold text-slate-100 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Vikas Pandey
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            You are on a roll. Keep the momentum going.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-bg-border bg-white/3 px-4 py-3 flex flex-col gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-7 h-7 rounded-lg bg-accent-violet/15 flex items-center justify-center">
                  <Icon size={13} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-lg leading-none">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
