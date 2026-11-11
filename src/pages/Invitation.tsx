
import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin, Heart } from 'lucide-react'

export default function Invitation() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fff7f5] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl rounded-3xl border border-[#ead5ce] bg-white px-6 py-12 text-center shadow-xl md:px-12"
      >
        <Heart className="mx-auto mb-5 text-[#bd8e80]" size={32} fill="#bd8e80" />

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#b18a72]">
          With grateful hearts and joyful anticipation
        </p>

        <h1 className="mb-4 font-serif text-4xl text-[#76564f] md:text-5xl">
          A Naming Ceremony
        </h1>

        <p className="mb-8 font-serif text-xl italic text-[#9b756b]">
          Our little princess
        </p>

        <div className="mx-auto mb-8 h-px w-24 bg-[#e7c9bf]" />

        <p className="mb-8 text-sm leading-7 text-[#80665e]">
          Together with our family and loved ones, we warmly invite you to
          celebrate the naming ceremony of our precious daughter.
        </p>

        <div className="space-y-6 rounded-2xl bg-[#fff7f5] p-6 text-left">
          <div className="flex items-center gap-4">
            <CalendarDays className="shrink-0 text-[#b9897c]" size={26} />
            <div>
              <p className="text-xs uppercase tracking-widest text-[#b18a72]">
                Date
              </p>
              <p className="font-serif text-lg text-[#76564f]">
                Sunday, 15 November 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="shrink-0 text-[#b9897c]" size={26} />
            <div>
              <p className="text-xs uppercase tracking-widest text-[#b18a72]">
                Time
              </p>
              <p className="font-serif text-lg text-[#76564f]">
                2:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="shrink-0 text-[#b9897c]" size={26} />
            <div>
              <p className="text-xs uppercase tracking-widest text-[#b18a72]">
                Venue
              </p>
              <p className="font-serif text-lg text-[#76564f]">
                Meridian Park Estate, Awoyaya, Lagos
              </p>
            </div>
          </div>
        </div>

        <p className="mt-9 font-serif text-xl italic text-[#9b756b]">
          Your presence will make our celebration even more special.
        </p>

        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#bd8e80]">
          With love, the family
        </p>
      </motion.div>
    </main>
  )
}