'use client'

import { useState, useRef, useEffect } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
}

const messages = [
  "Thank you for existing, baby.",
  "You make me smile every day",
  "Forever yours 🩷",
  "You are my everything",
  "I love you so much",
  "You complete me",
  "My favorite person",
  "Always and forever"
]

export default function TouchSurprises({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [message, setMessage] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const sparkleIdRef = useRef(0)

  const handleTouchOrClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    let clientX: number
    let clientY: number

    if ('touches' in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    // Add sparkles
    const newSparkles: Sparkle[] = []
    for (let i = 0; i < 8; i++) {
      newSparkles.push({
        id: sparkleIdRef.current++,
        x: x + (Math.random() - 0.5) * 50,
        y: y + (Math.random() - 0.5) * 50
      })
    }

    setSparkles(prev => [...prev, ...newSparkles])
    setMessage(messages[Math.floor(Math.random() * messages.length)])

    // Remove message after 3 seconds
    setTimeout(() => setMessage(''), 3000)

    // Remove old sparkles
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)))
    }, 2000)
  }

  return (
    <div
      ref={containerRef}
      onClick={handleTouchOrClick}
      onTouchStart={handleTouchOrClick}
      className="relative w-full cursor-pointer"
    >
      {children}

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none text-2xl animate-confetti"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating message */}
      {message && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 animate-float">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold px-6 py-3 rounded-full shadow-lg whitespace-nowrap">
            {message}
          </div>
        </div>
      )}
    </div>
  )
}
