'use client'

const quotes = [
  'What are a few tears for a lifetime full of happiness.',
  'Yaad aa rhi hai',
  'Bimbobeard the nastyy',
  'I\'m just a baby'
]

export default function QuotesSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-12">
        Iconic Quotes by Abhinandan Jain
      </h2>

      <div className="space-y-6">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-400 hover:shadow-xl transition-shadow"
          >
            <div className="absolute -top-4 -left-2 text-4xl text-pink-300">"</div>
            <p className="font-comfortaa text-xl text-pink-700 italic text-center leading-relaxed">
              {quote}
            </p>
            <div className="absolute -bottom-4 -right-2 text-4xl text-pink-300">"</div>
          </div>
        ))}
      </div>
    </div>
  )
}
