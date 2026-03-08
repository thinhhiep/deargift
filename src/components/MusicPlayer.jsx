import { useRef, useState } from "react"
import "./MusicPlayer.css"

export default function MusicPlayer(){

  const audio = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (isPlaying) {
      audio.current.pause()
    } else {
      audio.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  return(

    <div className="music-player">

      <audio 
        ref={audio} 
        src="/audio/bg.mp3"
        onEnded={handleAudioEnd}
      />

      <button 
        className="music-btn"
        onClick={togglePlay}
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>

      <span className="music-label">
        {isPlaying ? "Now Playing 🎵" : "Play Music 🎵"}
      </span>

    </div>

  )
}