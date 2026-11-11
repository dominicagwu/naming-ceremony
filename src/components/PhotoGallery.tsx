
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoGalleryProps {
  onContinue: () => void
}

const photos = [
  { src: '/images/image1.jpeg', title: 'A beautiful beginning' },
  { src: '/images/image2.jpeg', title: 'A love that grows' },
  { src: '/images/image3.jpeg', title: 'A family filled with love' },
  { src: '/images/image4.jpeg', title: 'Our greatest blessing' },
]

export default function PhotoGallery({ onContinue }: PhotoGalleryProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % photos.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((current + 1) % photos.length)

  const previous = () =>
    setCurrent((current - 1 + photos.length) % photos.length)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fff7f5] px-4 py-10">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b18a72]">
        A growing family
      </p>

      <h2 className="mb-8 text-center font-serif text-3xl text-[#76564f] md:text-5xl">
        Love made us three
      </h2>

      <div className="relative w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={photos[current].src}
                alt={photos[current].title}
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={previous}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#76564f] shadow-md"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#76564f] shadow-md"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-5 flex gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setCurrent(index)}
            aria-label={`Show photo ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? 'w-8 bg-[#bd8e80]' : 'w-2.5 bg-[#e7c9bf]'
            }`}
          />
        ))}
      </div>

      <p className="mt-7 max-w-sm text-center font-serif text-lg italic text-[#9b756b]">
        "The greatest gift of love is the blessing of a child."
      </p>

      <button
        onClick={onContinue}
        className="mt-8 rounded-full bg-[#b9897c] px-9 py-3 text-sm tracking-widest text-white shadow-lg transition hover:bg-[#9e7065]"
      >
        CONTINUE TO INVITATION
      </button>
    </div>
  )
}
