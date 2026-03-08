import { useEffect } from "react"

export default function MatrixRain({text}){

  useEffect(()=>{

    const canvas = document.getElementById("matrix")
    if(!canvas) return
    const ctx = canvas.getContext("2d")

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const letters = text.split("")
    const fontSize = 16
    const columns = canvas.width/fontSize

    const drops=[]

    for(let i=0;i<columns;i++){
      drops[i]=1
    }

    function draw(){

      ctx.fillStyle="rgba(0,0,0,0.05)"
      ctx.fillRect(0,0,canvas.width,canvas.height)

      ctx.fillStyle="#ff4da6"
      ctx.font=fontSize+"px monospace"

      for(let i=0;i<drops.length;i++){

        const letter =
          letters[Math.floor(Math.random()*letters.length)]

        ctx.fillText(letter,i*fontSize,drops[i]*fontSize)

        if(drops[i]*fontSize>canvas.height && Math.random()>0.95){
          drops[i]=0
        }

        drops[i]++

      }

    }

    const interval = setInterval(draw,40)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }

  },[text])

  return <canvas id="matrix"/>
}