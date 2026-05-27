import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { Course } from '@/lib/types'
import Sidebar from '@/components/Sidebar'
import BentoGrid from '@/components/BentoGrid'
import Loading from './loading'

async function getCourses(): Promise<Course[]> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('courses fetch error:', error)
      return []
    }

    return data ?? []
  } catch (e) {
    console.error(e)
    return []
  }
}

async function CoursesSection() {
  const courses = await getCourses()
  return <BentoGrid courses={courses} />
}

export default function DashboardPage() {
  return (
 <div className="flex h-screen w-full overflow-hidden bg-bg-primary">
 <Sidebar />
 <main className="flex-1 overflow-y-auto">
<Suspense fallback={<Loading />}>
 <CoursesSection />
 </Suspense>
  </main>
  </div>
  )
}
