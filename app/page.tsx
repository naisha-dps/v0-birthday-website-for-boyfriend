'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Hero from '@/components/hero'
import CountdownTimer from '@/components/countdown-timer'
import PhotoGallery from '@/components/photo-gallery'
import IconMessages from '@/components/icon-messages'
import LifeImprovementCards from '@/components/life-improvement-cards'
import QuotesSection from '@/components/quotes-section'
import TouchSurprises from '@/components/touch-surprises'
import CursorHearts from '@/components/cursor-hearts'
import BirthdayWish from '@/components/birthday-wish'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 overflow-hidden">
      <CursorHearts />
      <TouchSurprises>
        {/* Hero Section with confetti */}
        <section className="relative py-12 sm:py-16">
          <Hero />
        </section>

        {/* Countdown Timer */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-pink-100 to-orange-50">
          <CountdownTimer targetDate="2025-11-15T00:00:00+05:30" />
        </section>

        <section className="py-12 sm:py-16 px-4">
          <BirthdayWish isModal={false} />
        </section>

        {/* Photo Gallery */}
        <section className="py-12 sm:py-16 px-4">
          <PhotoGallery />
        </section>

        {/* Icon Messages */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-orange-50 to-pink-100">
          <IconMessages />
        </section>

        {/* Life Improvement Cards */}
        <section className="py-12 sm:py-16 px-4">
          <LifeImprovementCards />
        </section>

        {/* Quotes Section */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-pink-100 to-orange-50">
          <QuotesSection />
        </section>

        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-12">
              Special Moments & Games
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { href: '/timeline', label: 'Our Story', color: 'from-purple-400 to-pink-600', icon: '📖' },
                { href: '/spin-wheel', label: 'Spin Wheel', color: 'from-orange-400 to-pink-600', icon: '🎡' },
                { href: '/reasons', label: 'Why I Love You', color: 'from-red-400 to-pink-600', icon: '💕' },
                { href: '/puzzle', label: 'Name Puzzle', color: 'from-blue-400 to-pink-600', icon: '🧩' },
                { href: '/heart', label: 'Heart Button', color: 'from-rose-400 to-pink-600', icon: '❤️' },
                { href: '/voice', label: 'Voice Notes', color: 'from-amber-400 to-pink-600', icon: '🎙️' },
                { href: '/certificate', label: 'Certificate', color: 'from-yellow-400 to-orange-600', icon: '🏆' },
                { href: '/catch', label: 'Catch Hearts', color: 'from-cyan-400 to-pink-600', icon: '🧺' }
              ].map(btn => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  className={`bg-gradient-to-br ${btn.color} hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-3xl p-8 text-center shadow-xl active:scale-95 block`}
                >
                  <div className="text-5xl sm:text-6xl mb-3">{btn.icon}</div>
                  <p className="text-white font-bold text-lg font-poppins">{btn.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center border-t border-pink-200">
          <p className="text-pink-600 font-playfair text-2xl">Forever yours</p>
        </footer>
      </TouchSurprises>
    </main>
  )
}
