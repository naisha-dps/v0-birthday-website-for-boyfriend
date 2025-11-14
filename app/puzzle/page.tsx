'use client'

import Link from 'next/link'
import NamePuzzle from '@/components/name-puzzle'
import CursorHearts from '@/components/cursor-hearts'

export default function PuzzlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-white">
      <CursorHearts />
      
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-poppins font-semibold transition-colors"
          >
            ← Back
          </Link>
          <h1 className="font-playfair text-3xl font-bold text-blue-600">Name Puzzle</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="py-12 px-4 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <NamePuzzle isModal={false} />
      </div>
    </main>
  )
}
