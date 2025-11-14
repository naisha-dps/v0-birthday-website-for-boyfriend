'use client'

import { useEffect, useState } from 'react'

interface BirthdayWishProps {
  isModal?: boolean
}

export default function BirthdayWish({ isModal = false }: BirthdayWishProps) {
  const [showWish, setShowWish] = useState(false)

  useEffect(() => {
    setShowWish(true)
  }, [])

  const wishText = "I love you so much...I'm sorry for all the times I haven't been the girlfriend you deserve. There is nothing in my life I love more than you. You are my everything. It's your special day today and you deserve all the love and happiness in the world. You make this world look like heaven to me whenever you are by my side. From your cute double chin to your soulful eyes, everything about you is so so adorable. I love you baby. Happy 20th."

  return (
    <div className={`transition-all duration-1000 ${showWish ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className={`bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 sm:p-12 border-2 border-pink-200 shadow-lg ${isModal ? '' : 'max-w-4xl mx-auto'}`}>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-8 leading-relaxed">
          {wishText}
        </h2>
        
        <div className="flex justify-center gap-4 pt-6">
          <span className="text-4xl animate-heartbeat">💗</span>
          <span className="text-4xl animate-heartbeat" style={{ animationDelay: '0.2s' }}>💗</span>
          <span className="text-4xl animate-heartbeat" style={{ animationDelay: '0.4s' }}>💗</span>
        </div>
      </div>
    </div>
  )
}
