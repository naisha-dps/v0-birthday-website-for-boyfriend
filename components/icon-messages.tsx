'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface Message {
  icon: string
  label: string
  content: string
}

const messages: Message[] = [
  {
    icon: '❤️',
    label: 'Love',
    content: "I can't put it in words, that's how much I love you baby. I love you I love you I love you and I LOVE YOU. I will always love you..Always..Forever. I don't know how I fell in love with you but since the moment I've known this, my life has completely changed. You make it so so beautiful...you are my ray of sunshine or as you say, my moon in the dark."
  },
  {
    icon: '😔',
    label: 'Apologies',
    content: "I am so so so sorry for making you cry. Trust me I feel terrible about every single time I've done that. I just wanna say, I never meant any of the bad stuff I said to you. When I'm emotional, I'm not thinking at all. I'm just heartlessly speaking and that's why you never need to take all that seriously from now on. I love you to infinity and beyond."
  },
  {
    icon: '🤣',
    label: 'Funny',
    content: "You know, you're genuinely one of the funniest people I've ever known. The way you say things so casually and somehow make me laugh like an idiot every single time it's just different. Even when I'm tired or annoyed, you manage to pull a smile out of me without even trying. You make the most random conversations feel fun, and I don't think you even realise how effortlessly funny you are. It's honestly one of my favourite things about you."
  },
  {
    icon: '🔥',
    label: 'Hotness',
    content: "You're honestly so hot in a way that still surprises me sometimes. You being tall already does something, but then you make that pouty face and I swear it should be illegal because you look too good. And your little double chin when you smile or pout, it's the cutest thing ever, it just makes you look even more attractive. I don't think you even realise how insanely good-looking you are. You could pull any girl but you still choose to be with me hehehhehe."
  }
]

export default function IconMessages() {
  const [selected, setSelected] = useState<Message | null>(null)
  const [open, setOpen] = useState(false)

  const handleClick = (message: Message) => {
    setSelected(message)
    setOpen(true)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-12">
        Click on what you want to hear 💭
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {messages.map((msg, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(msg)}
            className="bg-gradient-to-br from-pink-200 to-pink-300 hover:from-pink-300 hover:to-pink-400 rounded-2xl p-8 shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-pink-400"
          >
            <div className="text-6xl mb-4">{msg.icon}</div>
            <p className="font-bold text-pink-700 text-lg">{msg.label}</p>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gradient-to-br from-pink-50 to-white max-w-2xl">
          <DialogTitle className="text-pink-600 font-playfair text-3xl text-center">
            {selected?.label}
          </DialogTitle>
          <p className="text-center text-lg text-pink-700 leading-relaxed">
            {selected?.content}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
