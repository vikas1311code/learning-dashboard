'use client'
import { motion } from 'framer-motion'
import { Course } from '@/lib/types'
import HeroTile from './HeroTile'
import CourseCard from './CourseCard'
import ActivityTile from './ActivityTile'
interface Props {
  courses: Course[]
}
export default function BentoGrid({ courses }: Props) {
  return (
    <section className="p-6 md:p-8 pb-24 md:pb-8">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07 } },
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 20 } } }}
          className="col-span-full lg:col-span-8"
        >
          <HeroTile />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 20 } } }}
          className="col-span-full sm:col-span-2 lg:col-span-4"
        >
          <ActivityTile />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 20 } } }}
          className="col-span-full mt-2"
        >
          <h2 className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Active Courses
            <span className="ml-2 text-accent-violet">{courses.length}</span>
          </h2>
        </motion.div>
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 20 } } }}
            className="col-span-1 lg:col-span-3"
          >
            <CourseCard course={course} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
