
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface EnvelopeProps {
  onOpen: () => void
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff7f5] px-4">
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#b18a72]">
          A little bundle of joy
        </p>

        <h1 className="mb-10 font-serif text-3xl text-[#76564f] md:text-5xl">
          You're Invited
        </h1>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.96 }}
          className="relative mx-auto flex h-48 w-72 items-center justify-center rounded-lg border border-[#e7c9bf] bg-[#f4dedb] shadow-xl md:h-56 md:w-96"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 origin-top bg-[#efd1ca] [clip-path:polygon(0_0,100%_0,50%_100%)]" />

          <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#c99b85] shadow-md">
            <Heart size={25} fill="white" color="white" />
          </div>

          <span className="absolute bottom-5 text-xs tracking-[0.3em] text-[#76564f]">
            OPEN INVITATION
          </span>
        </motion.button>

        <p className="mt-8 text-sm text-[#9b7b70]">
          A beautiful celebration awaits...
        </p>

        <p className="mt-3 text-xs uppercase tracking-widest text-[#c29a86]">
          Tap the envelope to begin
        </p>
      </div>
    </div>
  )
}
