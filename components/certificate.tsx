'use client'

interface CertificateProps {
  isModal?: boolean
}

export default function Certificate({ isModal = false }: CertificateProps) {
  const content = (
    <div>
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-yellow-600 mb-8">
        Your Special Certificate
      </h2>

      <div className={`bg-gradient-to-br from-yellow-100 via-pink-50 to-orange-100 rounded-3xl p-12 border-8 border-yellow-500 shadow-2xl relative overflow-hidden ${isModal ? '' : 'max-w-2xl mx-auto'}`}>
        {/* Decorative ribbons */}
        <div className="absolute top-4 right-4 w-16 h-32 bg-gradient-to-b from-pink-500 to-pink-600 rounded-full opacity-20 blur-lg" />
        <div className="absolute bottom-4 left-4 w-16 h-32 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full opacity-20 blur-lg" />

        <div className="relative z-10 text-center space-y-6">
          <p className="text-yellow-600 font-playfair text-2xl italic">This Certificate is Proudly Presented to</p>
          
          <h3 className="font-playfair text-5xl sm:text-6xl font-black text-pink-600">Abhinandan Jain</h3>
          <p className="text-pink-700 font-playfair text-2xl italic">aka Pufferfish</p>

          <div className="bg-gradient-to-r from-pink-200 to-orange-200 rounded-2xl p-8 border-3 border-pink-400 shadow-lg">
            <p className="text-pink-700 text-lg sm:text-xl font-bold leading-relaxed font-poppins">
              For being the cutest, hottest, funniest, sweetest and THE BEST boyfriend on this earth.
            </p>
          </div>

          <div className="flex justify-center gap-8 mt-12 flex-wrap">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center mb-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🏆</span>
              </div>
              <p className="text-yellow-700 font-bold font-poppins">Awarded</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center mb-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">💕</span>
              </div>
              <p className="text-pink-700 font-bold font-poppins">With Love</p>
            </div>
          </div>

          <p className="text-pink-600 mt-8 font-semibold text-lg font-poppins">15th November 2025</p>
        </div>
      </div>
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
