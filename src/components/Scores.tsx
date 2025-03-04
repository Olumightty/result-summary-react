interface Results{
  title: string,
  icon: string,
  score: number,
  text_color: string,
  bg_color: string
}

const Scores = (props: Results) => {
  return (
    <div className={`flex justify-between relative p-5 ${props.bg_color} rounded-lg`}>
      
        <div className={`flex gap-5`}>
            <img src={props.icon} alt="icon" />
            <p className={`${props.text_color} font-semibold`}>{props.title}</p>
        </div>
        <p><span className="font-semibold">{props.score}</span> / <span className="text-Light_lavender font-semibold">100</span></p>
    </div>
  )
}

export default Scores