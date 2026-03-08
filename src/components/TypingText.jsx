import Typewriter from "typewriter-effect"
import "./TypingText.css"

export default function TypingText(){

  return(

    <div className="typing-container">

      <Typewriter
        options={{
          strings:[
            "You are my sunshine ☀️",
            "Thank you for coming to my life 💫",
            "I love you forever ❤️",
            "You make me smile everyday 😊",
            "With you, I am complete 💑"
          ],
          autoStart:true,
          loop:true,
          delay: 80,
          deleteSpeed: 50
        }}
      />

    </div>

  )
}