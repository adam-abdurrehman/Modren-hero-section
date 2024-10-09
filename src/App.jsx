import {useState} from 'react';
import './index.css'
import Background from './Componants/Background/Background';
import Navbar from './Componants/Navbar/Navbar';
import Hero from './Componants/Hero/Hero';

const App = () => {
  let heroData = [
    {text1: "Dive into",text2: "What you love"},
    {text1: "Indulge",text2: "your passions"},
    {text1: "Give in to",text2: "your passions"},
  ]
  const [heroCount, setheroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div className='main'>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setheroCount={setheroCount}
    playStatus={playStatus}
    setPlayStatus={setPlayStatus}
     />
    </div>
  )
}

export default App