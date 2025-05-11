import { useEffect, useState } from 'react'
import './AvatarFlip.css'

export default function AvatarFlip() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => !prev)
    }, 3000) // toutes les 3 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flip-container w-40 h-40">
      <div className={`flipper ${flipped ? 'flipped' : ''}`}>
        <img src="/assets/profil.png" alt="Avatar"  className="w-64 mx-auto rounded-full shadow-[0_30px_60px_rgba(0,255,0,0.5)]" />
        <img src="/assets/photo.png" alt="Photo réelle" className="back w-full h-full object-cover rounded-full" />
      </div>
    </div>
  )
}
