'use client'

import { useState, useEffect, useRef } from 'react'

interface Heart {
  id: number
  x: number
  y: number
  falling: boolean
}

interface CatchHeartsProps {
  isModal?: boolean
}

export default function CatchHearts({ isModal = false }: CatchHeartsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [basketX, setBasketX] = useState(0)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = Math.min(800, window.innerWidth - 40)
    canvas.height = 400

    if (!gameStarted) return

    let animationId: number
    let heartsArray: Heart[] = []
    let nextHeartTime = Date.now()
    let basketPosition = canvas.width / 2
    let caught = 0

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw basket
      ctx.fillStyle = '#db2777'
      ctx.fillRect(basketPosition - 30, canvas.height - 40, 60, 40)
      ctx.font = '30px Arial'
      ctx.fillText('🧺', basketPosition - 15, canvas.height - 20)

      // Update and draw hearts
      heartsArray = heartsArray.filter(heart => {
        heart.y += 5

        // Check collision with basket
        if (
          heart.y > canvas.height - 40 &&
          heart.x > basketPosition - 30 &&
          heart.x < basketPosition + 30
        ) {
          caught++
          setScore(caught)
          return false
        }

        if (heart.y > canvas.height) return false

        ctx.font = '20px Arial'
        ctx.fillText('💗', heart.x - 10, heart.y)
        return true
      })

      // Create new hearts
      if (Date.now() > nextHeartTime) {
        heartsArray.push({
          id: Date.now(),
          x: Math.random() * (canvas.width - 40) + 20,
          y: 0,
          falling: true
        })
        nextHeartTime = Date.now() + 500
      }

      if (caught >= 10) {
        setMessage('Yayyy you caught all my hearts cutiepie!')
        setGameStarted(false)
      } else {
        animationId = requestAnimationFrame(draw)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      basketPosition = Math.max(30, Math.min(canvas.width - 30, e.clientX - rect.left))
      setBasketX(basketPosition)
    }

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      basketPosition = Math.max(30, Math.min(canvas.width - 30, touch.clientX - rect.left))
      setBasketX(basketPosition)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [gameStarted])

  const content = (
    <div className="text-center flex flex-col items-center">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-cyan-600 mb-8">
        Catch the Hearts
      </h2>

      <div className={`bg-gradient-to-b from-cyan-100 to-white rounded-3xl overflow-hidden border-4 border-cyan-300 shadow-xl ${isModal ? 'w-full max-w-2xl' : 'w-full max-w-2xl'}`}>
        <canvas
          ref={canvasRef}
          className="w-full bg-gradient-to-b from-blue-100 to-pink-100"
        />
      </div>

      <div className="mt-8 flex justify-between items-center w-full max-w-2xl gap-4 flex-wrap">
        <p className="text-cyan-600 font-playfair font-bold text-2xl">Score: {score}/10</p>
        <button
          onClick={() => {
            setGameStarted(!gameStarted)
            setScore(0)
            setMessage('')
          }}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all font-poppins text-lg"
        >
          {gameStarted ? 'Stop Game' : 'Start Game'}
        </button>
      </div>

      {message && (
        <div className="mt-8 bg-gradient-to-r from-cyan-200 to-pink-200 rounded-2xl p-6 border-3 border-cyan-400 shadow-lg animate-bounce max-w-xl">
          <p className="text-cyan-700 font-playfair font-bold text-xl">{message}</p>
        </div>
      )}
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
