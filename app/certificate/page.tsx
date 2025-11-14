'use client'

import Link from 'next/link'
import Certificate from '@/components/certificate'
import CursorHearts from '@/components/cursor-hearts'

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-pink-50">
      <CursorHearts />
      
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-poppins font-semibold transition-colors"
          >
            ← Back
          </Link>
          <h1 className="font-playfair text-3xl font-bold text-yellow-600">Certificate</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="py-12 px-4 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <Certificate isModal={false} />
      </div>
    </main>
  )
}
