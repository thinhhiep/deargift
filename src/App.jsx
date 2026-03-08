import MatrixRain from "./components/MatrixRain"
import FloatingHearts from "./components/FloatingHearts"
import FloatingImages from "./components/FloatingImages"
import IntroScreen from "./components/IntroScreen"
import HeroSection from "./components/HeroSection"
import TopBar from "./components/TopBar"
import LetterModal from "./components/LetterModal"
import SettingsPanel from "./components/SettingsPanel"

import { useState } from "react"

import "./App.css"

function App(){

  const [gameStarted, setGameStarted] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  return(

    <div className="app">

      {!gameStarted && <IntroScreen onStart={() => setGameStarted(true)} />}

      {gameStarted && (
        <>
          <MatrixRain text="LOVE ❤️"/>

          <FloatingHearts/>
          <FloatingImages/>

          <TopBar onSettingsClick={() => setShowSettings(!showSettings)} />

          <HeroSection onOpenLetter={() => setShowLetter(true)} />

          {showLetter && <LetterModal onClose={() => setShowLetter(false)} />}

          {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
        </>
      )}

    </div>

  )
}

export default App