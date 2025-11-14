'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 300

    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number; color: string }[] = []

    const colors = ['#db2777', '#f97316', '#fbbf24', '#db2777', '#db2777']

    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 1,
          size: Math.random() * 5 + 3,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    // Create initial burst
    for (let i = 0; i < 20; i++) {
      createParticles(
        canvas.width / 2,
        canvas.height / 2
      )
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.2 // gravity
        p.life -= 0.01

        if (p.life <= 0) {
          particles.splice(i, 1)
        } else {
          ctx.globalAlpha = p.life
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1

      if (particles.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative w-full h-80 flex flex-col items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-playfair text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mb-4 animate-sparkle">
          Happy Birthday My Love
        </h1>
        <p className="text-pink-500 text-lg sm:text-xl font-light animate-float">
          You are my everything
        </p>
      </div>
    </div>
  )
}
