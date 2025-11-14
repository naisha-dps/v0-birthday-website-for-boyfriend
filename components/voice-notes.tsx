'use client'

import { useState } from 'react'

interface VoiceNotesProps {
  isModal?: boolean
}

const voiceNotes = [
  { title: 'Good morning baby', file: '/voice-notes/good-morning.m4a' },
  { title: 'I miss you', file: '/voice-notes/miss-you.m4a' },
  { title: 'I love you', file: '/voice-notes/loves-you.mp4a' },
  { title: 'Special birthday audio', file: '/voice-notes/birthday.m4a' }
]

export default function VoiceNotes({ isModal = false }: VoiceNotesProps) {
  const [isPlaying, setIsPlaying] = useState<string | null>(null)

  const handlePlayClick = (file: string) => {
    const audio = new Audio(file)
    setIsPlaying(file)
    audio.play().catch(() => {
      alert('Audio file not found. Please add the voice note to: ' + file)
    })
    audio.onended = () => setIsPlaying(null)
  }

  const content = (
    <div>
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-amber-600 mb-12">
        Voice Notes
      </h2>

      <div className={`grid grid-cols-1 ${isModal ? '' : 'sm:grid-cols-2'} gap-8 ${isModal ? '' : 'max-w-3xl mx-auto'}`}>
        {voiceNotes.map((note, idx) => (
          <button
            key={idx}
            onClick={() => handlePlayClick(note.file)}
            className="bg-gradient-to-br from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-2xl p-8 shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 border-3 border-amber-400 text-left group"
          >
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <p className="font-playfair font-bold text-amber-700 text-lg">{note.title}</p>
                <p className="text-amber-600 text-sm font-poppins">Click to play</p>
              </div>
              <div className={`text-4xl transition-all duration-300 ${isPlaying === note.file ? 'animate-bounce scale-125' : 'group-hover:animate-bounce'}`}>
                ▶️
              </div>
            </div>
          </button>
        ))}
      </div>

      <p className="text-center text-amber-600 mt-12 text-sm font-poppins font-semibold">
        You can add your voice notes here
      </p>
    </div>
  )

  if (isModal) {
    return content
  }

  return (
    <div className={`${isModal ? '' : 'max-w-3xl mx-auto py-8'}`}>
      {content}
    </div>
  )
}
