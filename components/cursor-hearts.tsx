'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  x: number
  y: number
}

export default function CursorHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    let heartCount = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.7) {
        const newHeart: Heart = {
          id: nextId + heartCount,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20
        }
        heartCount++

        setHearts(prev => [...prev, newHeart])

        // Remove heart after animation
        setTimeout(() => {
          setHearts(prev => prev.filter(h => h.id !== newHeart.id))
        }, 1500)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [nextId])

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="fixed pointer-events-none font-bold text-xl animate-rise"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            opacity: 1,
            animation: `rise 1.5s ease-out forwards`
          }}
        >
          💗
        </div>
      ))}
      <style>{`
        @keyframes rise {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) scale(0.5);
          }
        }
        .animate-rise {
          animation: rise 1.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}
