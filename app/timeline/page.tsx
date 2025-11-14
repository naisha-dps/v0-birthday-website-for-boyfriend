'use client'

import Link from 'next/link'
import Timeline from '@/components/timeline'
import CursorHearts from '@/components/cursor-hearts'

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white">
      <CursorHearts />
      
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-poppins font-semibold transition-colors"
          >
            ← Back
          </Link>
          <h1 className="font-playfair text-3xl font-bold text-purple-600">Our Story</h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4">
        <Timeline isModal={false} />
      </div>
    </main>
  )
}
