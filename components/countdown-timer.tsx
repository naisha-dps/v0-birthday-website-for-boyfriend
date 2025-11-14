'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-4 sm:p-6 min-w-20 sm:min-w-24 shadow-lg transform hover:scale-105 transition-transform">
        <p className="text-2xl sm:text-4xl font-bold text-white text-center">
          {String(value).padStart(2, '0')}
        </p>
      </div>
      <p className="text-pink-600 font-semibold text-xs sm:text-sm mt-2">{label}</p>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-12">
        Countdown to Your Day ✨
      </h2>
      
      <div className="flex justify-center gap-2 sm:gap-6 flex-wrap">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}
