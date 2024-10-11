import './Hero.css'
import arrow from '../../assets/Arrow.png'
import pause from '../../assets/pause.png'
import play from '../../assets/play.png'

const Hero = ({ heroData, playStatus, setPlayStatus, heroCount, setHeroCount }) => {
    return (
        <div className="hero">
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className='button-nav'>
                <div className='button-nav-text'>
                    <p>Explore the features!</p>
                    <img className='button-nav-img' src={arrow} />
                </div>
                <div onClick={() => { setPlayStatus(!playStatus) }} className="play-pause">
                    <img src={playStatus ? pause : play} alt="" width="40" height="40" />
                    <span>{playStatus ? "Pause" : "Play"} the video</span>
                </div>
            </div>
            <ul>
                <li onClick={() => { setHeroCount(0) }} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => { setHeroCount(1) }} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => { setHeroCount(2) }} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>
        </div>
    )
}

export default Hero