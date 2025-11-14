'use client'

import { useState } from 'react'

interface ReasonGeneratorProps {
  isModal?: boolean
}

const reasons = [
  'Because your smile melts my heart',
  'Because you make me feel safe',
  'Because you\'re the funniest person I know',
  'Because your eyes are mesmerizing',
  'Because you\'re so caring and sweet',
  'Because you make ordinary days feel special',
  'Because I can be myself around you',
  'Because you believe in me',
  'Because your hugs heal everything',
  'Because you make me laugh until my stomach hurts',
  'Because you\'re my best friend',
  'Because your love is unconditional',
  'Because you challenge me to be better',
  'Because life is better with you',
  'Because you\'re my favorite person',
  'Because your presence calms me',
  'Because you understand me without words',
  'Because you make my heart skip a beat',
  'Because you\'re incredibly talented',
  'Because your kindness inspires me',
  'Because you make me feel beautiful',
  'Because every moment with you is a treasure',
  'Because you\'re my soulmate',
  'Because you make me believe in love',
  'Because you\'re worth every second'
]

export default function ReasonGenerator({ isModal = false }: ReasonGeneratorProps) {
  const [currentReason, setCurrentReason] = useState<string>('')
  const [usedReasons, setUsedReasons] = useState<number[]>([])

  const generateReason = () => {
    const availableReasons = reasons
      .map((_, idx) => idx)
      .filter(idx => !usedReasons.includes(idx))

    if (availableReasons.length === 0) {
      setUsedReasons([])
      setCurrentReason('')
      return
    }

    const randomIdx = availableReasons[Math.floor(Math.random() * availableReasons.length)]
    setCurrentReason(reasons[randomIdx])
    setUsedReasons([...usedReasons, randomIdx])
  }

  const content = (
    <div className="text-center flex flex-col items-center">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-red-600 mb-12">
        Why I Love You
      </h2>

      <div className="min-h-48 flex items-center justify-center mb-12 w-full">
        {currentReason && (
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-3xl p-12 shadow-xl border-4 border-red-300 animate-float max-w-2xl">
            <p className="font-playfair text-3xl sm:text-4xl text-red-600 font-bold leading-relaxed">
              {currentReason}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={generateReason}
        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 text-lg font-playfair"
      >
        Generate a Reason
      </button>

      <p className="text-red-500 text-lg mt-8 font-poppins font-semibold">
        {reasons.length - usedReasons.length} reasons left
      </p>

      <div className="mt-16 w-full max-w-3xl">
        <h3 className="font-playfair text-2xl font-bold text-red-600 mb-8">All reasons to love you:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-lg p-4 hover:bg-red-100 transition-colors">
              <p className="font-poppins text-sm sm:text-base text-gray-700">
                <span className="font-bold text-red-600">{idx + 1}.</span> {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (isModal) {
    return content
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      {content}
    </div>
  )
}
