import { useState, useEffect } from "react"
import "./IntroScreen.css"

export default function IntroScreen({ onStart }) {
  const [progress, setProgress] = useState(0)
  const [isHolding, setIsHolding] = useState(false)

  useEffect(() => {
    let interval
    if (isHolding && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 2
          return newProgress >= 100 ? 100 : newProgress
        })
      }, 40)
    }

    return () => clearInterval(interval)
  }, [isHolding, progress, onStart])

  // Trigger start once when progress reaches 100
  useEffect(() => {
    if (progress === 100) {
      // small delay to allow UI update
      const t = setTimeout(() => onStart(), 80)
      return () => clearTimeout(t)
    }
  }, [progress, onStart])

  const handleMouseDown = () => {
    setIsHolding(true)
  }

  const handleMouseUp = () => {
    setIsHolding(false)
    if (progress < 100) {
      setProgress(0)
    }
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
    setIsHolding(true)
  }

  const handleTouchEnd = (e) => {
    e.preventDefault()
    setIsHolding(false)
    if (progress < 100) {
      setProgress(0)
    }
  }

  return (
    <div className="intro-screen">
      <div className="intro-container">
        <h1 className="intro-title">✨ Love Gift ✨</h1>
        
        <div className="button-container">
          <button
            className={`hold-button ${isHolding ? "holding" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="progress-ring">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  className="progress-background"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  className="progress-fill"
                  style={{
                    strokeDasharray: `${progress * 3.45} 345`,
                  }}
                />
              </svg>
            </div>
            <span className="button-text">Press and Hold</span>
          </button>
        </div>

        <p className="progress-text">{progress}%</p>
      </div>
    </div>
  )
}
