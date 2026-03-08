import "./FloatingHearts.css"

export default function FloatingHearts(){

  const hearts = new Array(30).fill(0)

  return(

    <div className="hearts">

      {hearts.map((_,i)=>(
        <div
          key={i}
          className="heart"
          style={{
            left:Math.random()*100+"%",
            animationDelay: Math.random()*2 + "s",
            animationDuration: (Math.random()*5 + 8) + "s"
          }}
        >
          ❤️
        </div>
      ))}

    </div>

  )
}