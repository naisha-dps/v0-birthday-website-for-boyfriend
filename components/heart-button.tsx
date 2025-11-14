'use client'

import { useState, useRef, useEffect } from 'react'

interface HeartButtonProps {
  isModal?: boolean
}

export default function HeartButton({ isModal = false }: HeartButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [scale, setScale] = useState(1)
  const [message, setMessage] = useState('')
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseDown = () => {
    setIsPressed(true)
    setScale(1.3)
    setMessage('This is how my love keeps growing for you....its exponential')

    // Generate particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50
    }))
    setParticles(newParticles)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleMouseUp = () => {
    setIsPressed(false)
    setScale(1)
    setParticles([])

    timeoutRef.current = setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const content = (
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-rose-600 mb-12">
        How Much I Love You
      </h2>

      <div className="flex flex-col items-center gap-12">
        <div className="relative">
          <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className="focus:outline-none relative z-10"
          >
            <div
              className={`w-48 h-48 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center text-7xl cursor-pointer ${
                isPressed ? 'animate-pulse' : ''
              }`}
              style={{
                transform: `scale(${scale})`,
                background: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)',
                boxShadow: isPressed ? '0 0 60px rgba(219, 39, 119, 0.8)' : '0 20px 40px rgba(219, 39, 119, 0.3)'
              }}
            >
              ❤️
            </div>
          </button>

          {/* Particle effect */}
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-6 h-6 text-2xl pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${particle.x}px), calc(-50% + ${particle.y}px))`,
                animation: `float-up 1s ease-out forwards`
              }}
            >
              💕
            </div>
          ))}
        </div>

        {message && (
          <div className="bg-gradient-to-r from-rose-100 to-orange-100 rounded-3xl p-8 border-3 border-rose-300 shadow-xl animate-float max-w-xl">
            <p className="text-rose-700 font-poppins font-semibold text-lg">{message}</p>
          </div>
        )}

        <p className="text-rose-500 text-lg font-poppins">Press and hold the heart</p>
      </div>
    </div>
  )

  if (isModal) {
    return content
  }

  return (
    <div className={`${isModal ? '' : 'max-w-2xl mx-auto py-8'}`}>
      {content}
    </div>
  )
}
