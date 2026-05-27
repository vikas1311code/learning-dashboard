'use client'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
function generateActivityData() {
  const data: number[][] = []
  for (let w = 0; w < 10; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() < (w / 10 + 0.2) ? Math.floor(Math.random() * 4) + 1 : 0)
    }
    data.push(week)
  }
  return data
}
const intensityColors: Record<number, string> = {
  0: 'rgba(255,255,255,0.04)',
  1: 'rgba(124,58,237,0.25)',
  2: 'rgba(124,58,237,0.45)',
  3: 'rgba(124,58,237,0.65)',
  4: 'rgba(124,58,237,0.9)',
}
const days = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun']
export default function ActivityTile() {
  const activityData = useMemo(() => generateActivityData(), [])
  return (
    <article className="relative rounded-2xl border border-bg-border bg-gradient-to-br from-bg-card to-[#0a0e1a] overflow-hidden bento-card h-full">
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div
        className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent-violet/15 flex items-center justify-center">
              <Activity size={13} className="text-violet-400" />
            </div>
            <h2 className="text-slate-200 font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
              Activity
            </h2>
          </div>
          <span className="text-slate-500 text-xs">Last 10 weeks</span>
        </div>
        <div className="flex gap-1.5 items-start">
          <div className="flex flex-col gap-1 pt-0.5 mr-0.5">
            {days.map((d, i) => (
              <span key={i} className="text-slate-600 text-[9px] leading-none h-3 flex items-center">
                {d}
              </span>
            ))}
          </div>
          {activityData.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((val, di) => (
                <motion.div
                  key={di}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: intensityColors[val] ?? intensityColors[0] }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: wi * 0.03 + di * 0.01, type: 'spring', stiffness: 280, damping: 18 }}
                  whileHover={{ scale: 1.4 }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-slate-600 text-xs">Less</span>
          {[0, 1, 2, 3, 4].map(l => (
            <div key={l} className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: intensityColors[l] }} />
          ))}
          <span className="text-slate-600 text-xs">More</span>
        </div>
      </div>
    </article>
  )
}
