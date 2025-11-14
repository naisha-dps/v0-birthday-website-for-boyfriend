'use client'

import { useState, useRef } from 'react'

interface SpinWheelProps {
  isModal?: boolean
}

const wheelOptions = [
  'A kiss',
  'A hug',
  'A sweet message',
  'A spicy compliment',
  'A memory',
  'Take off my shirt',
  'Do anything you ask',
  'Seduce you'
]

export default function SpinWheel({ isModal = false }: SpinWheelProps) {
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const wheelRef = useRef<HTMLDivElement>(null)

  const spinWheel = () => {
    if (spinning) return

    setSpinning(true)
    const randomRotation = Math.floor(Math.random() * 360) + 1440
    const selectedIndex = Math.floor((randomRotation % 360) / (360 / wheelOptions.length))

    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${randomRotation}deg)`
    }

    setTimeout(() => {
      setResult(wheelOptions[selectedIndex])
      setShowResult(true)
      setSpinning(false)
    }, 2000)
  }

  const wheelContent = (
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-orange-600 mb-12">
        Spin the Wheel
      </h2>

      <div className="flex justify-center mb-12">
        <div className="relative w-96 h-96">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-16 border-l-transparent border-r-transparent border-t-orange-600" />
          </div>

          <div
            ref={wheelRef}
            className={`w-full h-full rounded-full border-8 border-orange-600 shadow-2xl transition-transform duration-2000 ease-out ${spinning ? 'animate-pulse' : ''}`}
            style={{
              background: `conic-gradient(
                from 0deg,
                #f472b6 0deg 45deg,
                #ec4899 45deg 90deg,
                #db2777 90deg 135deg,
                #be185d 135deg 180deg,
                #f472b6 180deg 225deg,
                #ec4899 225deg 270deg,
                #db2777 270deg 315deg,
                #be185d 315deg 360deg
              )`
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-orange-600 text-4xl">
                {wheelOptions.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={spinWheel}
        disabled={spinning}
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 text-lg font-playfair"
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel!'}
      </button>

      {showResult && (
        <div className="mt-12 bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl p-8 border-4 border-orange-400 shadow-xl animate-bounce max-w-xl">
          <p className="font-playfair text-2xl text-orange-700 mb-3 font-bold">Your Result</p>
          <p className="text-center text-3xl text-orange-700 font-playfair font-bold">
            {result}
          </p>
        </div>
      )}
    </div>
  )

  if (isModal) {
    return wheelContent
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      {wheelContent}
    </div>
  )
}
