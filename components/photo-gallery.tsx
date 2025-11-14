'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PhotoGallery() {
  const [photos] = useState([
    "/image1..jpg",
  "/image2..jpg",
  "/image3..jpg",
  "/image4..jpg",
  "/image5.jpg",
  "/image6..jpg",
  ])

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-4">
        My favourite boy in the whole universe
      </h2>
      <p className="text-center text-pink-500 text-lg mb-12">🩷 Only Him 🩷</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="relative h-64 rounded-2xl overflow-hidden border-4 border-pink-300 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <Image
              src={photo || "/placeholder.svg"}
              alt={`Memory ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <p className="text-center text-pink-500 mt-8 text-sm">
        💌
      </p>
    </div>
  )
}
