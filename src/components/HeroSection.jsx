import { useState, useEffect } from "react"
import "./HeroSection.css"

export default function HeroSection({ onOpenLetter }) {
  const messages = [
    "You are my sunshine ☀️",
    "Thank you for coming to my life 💫",
    "I love you forever ❤️",
    "You make me smile everyday 😊",
    "With you, I am complete 💑"
  ]

  const [displayText, setDisplayText] = useState("")
  const [messageIndex, setMessageIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timer)
    }

    const currentMessage = messages[messageIndex]
    const speed = isDeleting ? 30 : 50

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentMessage.substring(0, displayText.length - 1))
        if (displayText.length === 1) {
          setIsDeleting(false)
          setMessageIndex((prev) => (prev + 1) % messages.length)
        }
      } else {
        const nextText = currentMessage.substring(0, displayText.length + 1)
        setDisplayText(nextText)
        if (nextText === currentMessage) {
          setIsWaiting(true)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, messageIndex, isDeleting, isWaiting, messages])

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          🌸 Happy Women's Day 🌸
        </h1>

        <div className="typing-container">
          <p className="typing-text">{displayText}</p>
          <span className="cursor"></span>
        </div>

        <button className="open-letter-btn" onClick={onOpenLetter}>
          💌 Open My Letter
        </button>
      </div>
    </section>
  )
}
