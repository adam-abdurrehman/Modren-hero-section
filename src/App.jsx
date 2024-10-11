import {useEffect, useState} from 'react';
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
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
        setHeroCount((count)=>{ return count===2?0:count+1})
    }, 3000);
  }, [])
  
  return (
    <div className='main'>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    setPlayStatus={setPlayStatus}
     />
    </div>
  )
}

export default App