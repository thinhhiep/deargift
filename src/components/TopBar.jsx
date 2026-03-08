import { useRef, useState } from "react"
import "./TopBar.css"

export default function TopBar({ onSettingsClick }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div className="topbar">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onEnded={handleAudioEnd}
        loop
      />

      <button
        className={`topbar-button music-btn ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? "🎵" : "🎶"}
      </button>

      <button
        className="topbar-button settings-btn"
        onClick={onSettingsClick}
        title="Settings"
      >
        ⚙️
      </button>
    </div>
  )
}
