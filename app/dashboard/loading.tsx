export default function Loading() {
  return (
  <div className="flex h-screen w-full overflow-hidden bg-bg-primary">
  <div className="hidden md:block w-60 shrink-0 border-r border-bg-border bg-bg-secondary skeleton-shimmer" />
  <div className="flex-1 p-6 md:p-8">
   <div className="skeleton-shimmer h-44 w-full rounded-2xl mb-6" />
   <div className="skeleton-shimmer h-4 w-32 rounded mb-4" />
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
   <div className="skeleton-shimmer h-48 rounded-2xl" />
   <div className="skeleton-shimmer h-48 rounded-2xl" />
    <div className="skeleton-shimmer h-48 rounded-2xl" />
    <div className="skeleton-shimmer h-48 rounded-2xl" />
   </div>
 </div>
 </div>
 )
}
