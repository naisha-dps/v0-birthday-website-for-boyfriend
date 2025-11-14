'use client'

import { useEffect, useState } from 'react'

interface TimelineProps {
  isModal?: boolean
}

const timelineEvents = [
  { date: '19 July 2024', event: 'First time we talked' },
  { date: '15 September 2024', event: 'First call' },
  { date: '18 August 2024', event: 'First fight' },
  { date: '24 August 2024', event: 'First videocall' },
  { date: '25 December 2024', event: 'First I love you' },
  { date: '13 January 2025', event: 'The day you became mine forever' },
  { date: '28 June 2025', event: 'First and last breakup' },
  { date: '10 July 2025', event: 'When we got closer' }
]

export default function Timeline({ isModal = false }: TimelineProps) {
  const [visible, setVisible] = useState<boolean[]>(new Array(timelineEvents.length).fill(false))

  useEffect(() => {
    timelineEvents.forEach((_, idx) => {
      setTimeout(() => {
        setVisible(prev => {
          const newVisible = [...prev]
          newVisible[idx] = true
          return newVisible
        })
      }, idx * 150)
    })
  }, [])

  return (
    <div className={isModal ? '' : 'max-w-4xl mx-auto'}>
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-purple-600 mb-12">
        Our Story
      </h2>

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300" />

        <div className="space-y-8">
          {timelineEvents.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-4 transition-all duration-500 ${
                visible[idx] ? 'opacity-100' : 'opacity-0'
              } ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Content */}
              <div className="flex-1 lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-8 border-3 border-purple-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <p className="font-playfair font-bold text-purple-600 text-2xl sm:text-2xl mb-3">{item.date}</p>
                  <p className="text-purple-700 font-poppins font-semibold text-lg sm:text-xl leading-relaxed">{item.event}</p>
                </div>
              </div>

              <div className="hidden lg:flex justify-center w-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white shadow-lg hover:shadow-2xl hover:scale-125 transition-all duration-300 flex items-center justify-center text-3xl cursor-pointer">
                  ✨
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
