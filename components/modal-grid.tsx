'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import BirthdayWish from '@/components/birthday-wish'
import ReasonGenerator from '@/components/reason-generator'
import Timeline from '@/components/timeline'
import SpinWheel from '@/components/spin-wheel'
import NamePuzzle from '@/components/name-puzzle'
import HeartButton from '@/components/heart-button'
import VoiceNotes from '@/components/voice-notes'
import CatchHearts from '@/components/catch-hearts'
import Certificate from '@/components/certificate'

interface ModalState {
  wish: boolean
  reasons: boolean
  timeline: boolean
  wheel: boolean
  puzzle: boolean
  heart: boolean
  voice: boolean
  catch: boolean
  cert: boolean
}

export default function ModalGrid() {
  const [modals, setModals] = useState<ModalState>({
    wish: false,
    reasons: false,
    timeline: false,
    wheel: false,
    puzzle: false,
    heart: false,
    voice: false,
    catch: false,
    cert: false
  })

  const toggleModal = (key: keyof ModalState) => {
    setModals(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const iconButtons = [
    { id: 'wish', label: 'Birthday Wish', icon: '💌', color: 'from-pink-400 to-pink-600' },
    { id: 'reasons', label: 'Why I Love You', icon: '💕', color: 'from-red-400 to-pink-600' },
    { id: 'timeline', label: 'Our Story', icon: '📖', color: 'from-purple-400 to-pink-600' },
    { id: 'wheel', label: 'Spin Wheel', icon: '🎡', color: 'from-orange-400 to-pink-600' },
    { id: 'puzzle', label: 'Name Puzzle', icon: '🧩', color: 'from-blue-400 to-pink-600' },
    { id: 'heart', label: 'Heart Button', icon: '❤️', color: 'from-rose-400 to-pink-600' },
    { id: 'voice', label: 'Voice Notes', icon: '🎙️', color: 'from-amber-400 to-pink-600' },
    { id: 'catch', label: 'Catch Hearts', icon: '🧺', color: 'from-cyan-400 to-pink-600' },
    { id: 'cert', label: 'Certificate', icon: '🏆', color: 'from-yellow-400 to-orange-600' }
  ]

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-12">
          Special Moments & Games
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {iconButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => toggleModal(btn.id as keyof ModalState)}
              className={`bg-gradient-to-br ${btn.color} hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-3xl p-8 text-center shadow-xl active:scale-95`}
            >
              <div className="text-5xl sm:text-6xl mb-3">{btn.icon}</div>
              <p className="text-white font-bold text-lg font-poppins">{btn.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Birthday Wish Modal */}
      <Dialog open={modals.wish} onOpenChange={() => toggleModal('wish')}>
        <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
          <BirthdayWish isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Reason Generator Modal */}
      <Dialog open={modals.reasons} onOpenChange={() => toggleModal('reasons')}>
        <DialogContent className="max-w-2xl">
          <ReasonGenerator isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Timeline Modal */}
      <Dialog open={modals.timeline} onOpenChange={() => toggleModal('timeline')}>
        <DialogContent className="max-w-3xl max-h-96 overflow-y-auto">
          <Timeline isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Spin Wheel Modal */}
      <Dialog open={modals.wheel} onOpenChange={() => toggleModal('wheel')}>
        <DialogContent className="max-w-2xl">
          <SpinWheel isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Name Puzzle Modal */}
      <Dialog open={modals.puzzle} onOpenChange={() => toggleModal('puzzle')}>
        <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
          <NamePuzzle isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Heart Button Modal */}
      <Dialog open={modals.heart} onOpenChange={() => toggleModal('heart')}>
        <DialogContent className="max-w-xl">
          <HeartButton isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Voice Notes Modal */}
      <Dialog open={modals.voice} onOpenChange={() => toggleModal('voice')}>
        <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
          <VoiceNotes isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Catch Hearts Modal */}
      <Dialog open={modals.catch} onOpenChange={() => toggleModal('catch')}>
        <DialogContent className="max-w-2xl">
          <CatchHearts isModal={true} />
        </DialogContent>
      </Dialog>

      {/* Certificate Modal */}
      <Dialog open={modals.cert} onOpenChange={() => toggleModal('cert')}>
        <DialogContent className="max-w-3xl max-h-96 overflow-y-auto">
          <Certificate isModal={true} />
        </DialogContent>
      </Dialog>
    </>
  )
}
