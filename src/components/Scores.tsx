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
        <p><span>{props.score}</span> / 100</p>
    </div>
  )
}

export default Scores