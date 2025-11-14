'use client'

import { useEffect, useState } from 'react'

const improvements = [
  'You make me feel safe and loved',
  'You bring out the best in me',
  'Life with you is an adventure',
  'You make ordinary moments special',
  'Your smile brightens my darkest days',
  'You make me believe in forever',
  'Every moment with you is precious'
]

export default function LifeImprovementCards() {
  const [visible, setVisible] = useState<boolean[]>(new Array(improvements.length).fill(false))

  useEffect(() => {
    improvements.forEach((_, idx) => {
      setTimeout(() => {
        setVisible(prev => {
          const newVisible = [...prev]
          newVisible[idx] = true
          return newVisible
        })
      }, idx * 200)
    })
  }, [])

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-12">
        How You Make My Life Better ✨
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {improvements.map((improvement, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-6 shadow-lg border-2 border-pink-500 transform transition-all duration-500 ${
              visible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } hover:scale-105 hover:shadow-xl`}
          >
            <p className="text-white text-center font-semibold text-lg leading-relaxed">
              {improvement}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
