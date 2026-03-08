import Confetti from "react-confetti"
import { useEffect, useState } from "react"
import "./LetterModal.css"

export default function LetterModal({ onClose }) {
  const letterContent = `Dear Love 💕

Thank you for being the most wonderful person in my life.

Every moment with you is a blessing. Your smile brightens my darkest days, and your love fills my heart with joy.

I want you to know:
• You are my greatest treasure ❤️
• Your kindness inspires me daily 🌟
• I cherish every memory with you 💫
• You are my forever 💑

Happy Women's Day! You deserve all the happiness in the world.

With all my love,
Forever Yours 💌`

  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < letterContent.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + letterContent[index])
        setIndex(index + 1)
      }, 30)

      return () => clearTimeout(timer)
    }
  }, [index, letterContent])

  return (
    <div className="letter-modal-overlay" onClick={onClose}>
      <Confetti />

      <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="letter-header">
          <span className="letter-icon">💌</span>
          <h2>My Love Letter</h2>
          <span className="letter-icon">💌</span>
        </div>

        <div className="letter-body">
          <p className="letter-text">{displayText}</p>
        </div>

        <div className="letter-footer">
          <p>Click anywhere to close</p>
        </div>
      </div>
    </div>
  )
}
