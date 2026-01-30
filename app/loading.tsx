export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-surgical-blue/20"></div>
        <div className="w-20 h-20 rounded-full border-4 border-surgical-teal border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  )
}
