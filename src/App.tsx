
import ContinueButton from './components/ContinueButton'
import Scores from './components/Scores'
import data from './assets/constants'

function App() {
  
  return (
   <div className='bg-Pale_blue flex justify-center md:h-[100vh] md:py-[10%] flex-col md:flex-row'>
      <div className='text-center bg-gradient-to-b from-Light_slate_blue to-Light_royal_blue md:w-[20%] rounded-b-[50px] md:rounded-xl flex flex-col gap-2 md:gap-10 p-5 md:p-10 '>
        <p className='font-Hanken text-lg font-semibold text-Light_lavender'>Your Result</p>
        <div className='flex flex-col justify-center w-[150px] h-[150px] self-center rounded-full bg-gradient-to-b from-Violet_blue to-Persian_blue'>
          <p className='text-[60px] font-bold text-White font-Hanken flex flex-col'>
            <span>76</span>
            <span className='text-sm text-Light_lavender'>of 100</span>
          </p>
        </div>
        <p className='font-bold text-2xl text-White'>Great</p>
        <p className='text-Light_lavender font-semibold text-sm'>You scored higher than 60% of the people who have taken these tests</p>
      </div>
      <div className='md:w-[20%] rounded-r-xl bg-White px-10 py-5 md:p-10 flex flex-col gap-5'>
        <p className='font-Hanken text-lg font-semibold text-Dark_gray_blue'>Summary</p>
        {data.map((result) => <Scores title={result.category} score={result.score} icon={result.icon} text_color={result['text-color']} bg_color={result['bg-color']} />)}
        <ContinueButton/>
      </div>
   </div>
  )
}

export default App
