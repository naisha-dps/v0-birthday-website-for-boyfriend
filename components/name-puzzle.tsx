'use client'

import { useState, useEffect } from 'react'

const targetName = 'ABHINANDAN'
const letters = targetName.split('').sort(() => Math.random() - 0.5)

interface Letter {
  id: string
  letter: string
  position: { x: number; y: number }
}

interface NamePuzzleProps {
  isModal?: boolean
}

export default function NamePuzzle({ isModal = false }: NamePuzzleProps) {
  const [puzzle, setPuzzle] = useState<Letter[]>([])
  const [solved, setSolved] = useState(false)
  const [draggedLetter, setDraggedLetter] = useState<string | null>(null)

  useEffect(() => {
    setPuzzle(
      letters.map((letter, idx) => ({
        id: `${letter}-${idx}`,
        letter,
        position: {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100
        }
      }))
    )
  }, [])

  const handleDragStart = (e: React.DragEvent, letter: string) => {
    setDraggedLetter(letter)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (e: React.DragEvent, correctLetter: string) => {
    e.preventDefault()
    if (draggedLetter === correctLetter) {
      const isComplete = puzzle.every(p => p.letter === draggedLetter || p.position.x === 0)
      if (isComplete) {
        setSolved(true)
      }
    }
    setDraggedLetter(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const content = (
    <div className="text-center">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-blue-600 mb-8">
        Complete His Name
      </h2>

      <div className={`bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 mb-8 border-3 border-blue-300 shadow-xl ${isModal ? '' : 'max-w-2xl mx-auto'}`}>
        <p className="text-sm text-blue-600 mb-6 font-poppins font-semibold">Drag the letters to spell his name</p>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {targetName.split('').map((letter, idx) => (
            <div
              key={idx}
              onDrop={(e) => handleDrop(e, letter)}
              onDragOver={handleDragOver}
              className="w-14 h-14 bg-white border-4 border-blue-400 rounded-xl flex items-center justify-center font-bold text-blue-600 cursor-pointer hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-xl"
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="relative h-56 bg-gradient-to-b from-white to-blue-50 rounded-xl border-3 border-blue-200 overflow-hidden">
          {puzzle.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.letter)}
              className="absolute w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white cursor-grab hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg"
              style={{
                left: `calc(50% + ${item.position.x}px)`,
                top: `calc(50% + ${item.position.y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {item.letter}
            </div>
          ))}
        </div>
      </div>

      {solved && (
        <div className="bg-gradient-to-r from-blue-200 to-pink-200 rounded-2xl p-8 border-3 border-blue-400 shadow-xl animate-bounce max-w-xl mx-auto">
          <p className="text-blue-700 font-playfair text-2xl font-bold mb-2">You completed it!</p>
          <p className="text-blue-600 font-poppins italic text-lg">"You complete me the same way you completed this puzzle."</p>
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
