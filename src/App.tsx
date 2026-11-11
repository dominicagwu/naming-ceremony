
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Envelope from './components/Envelope'
import PhotoGallery from './components/PhotoGallery'
import Invitation from './pages/Invitation'

type Page = 'envelope' | 'gallery' | 'invitation'

function App() {
  const [page, setPage] = useState<Page>('envelope')
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const openEnvelope = async () => {
    setPage('gallery')

    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setMusicPlaying(true)
      } catch (error) {
        console.error('Music could not start:', error)
      }
    }
  }

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play()
        setMusicPlaying(true)
      } catch (error) {
        console.error('Music could not start:', error)
      }
    } else {
      audioRef.current.pause()
      setMusicPlaying(false)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <audio
        ref={audioRef}
        src="/music/Tim_Godfrey_-_Nara_(mp3.pm).mp3"
        loop
        preload="auto"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />

      {page !== 'envelope' && (
        <button
          onClick={toggleMusic}
          className="fixed right-5 top-5 z-50 rounded-full bg-white/90 px-4 py-3 text-sm text-[#76564f] shadow-lg"
        >
          {musicPlaying ? '♫ Music On' : '♫ Music Off'}
        </button>
      )}

      <AnimatePresence mode="wait">
        {page === 'envelope' && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <Envelope onOpen={openEnvelope} />
          </motion.div>
        )}

        {page === 'gallery' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            <PhotoGallery onContinue={() => setPage('invitation')} />
          </motion.div>
        )}

        {page === 'invitation' && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App