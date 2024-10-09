import './Background.css';
import video from '../../assets/audi-suv-trailer.mp4';
import image1 from '../../assets/2023-Lamborghini.jpg';
import image2 from '../../assets/2025-Alfa.jpg';
import image3 from '../../assets/2014-Peugeot.jpg';

const Background = ({playStatus, heroCount}) => {
    if (playStatus) {
        return(
            <video className='background' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        )
    }
    else if (heroCount === 0) {
        return( <img src={image1} className='background'/> )
    }
    else if (heroCount === 1) {
        return( <img src={image2} className='background'/> )
    }
    else if (heroCount === 2) {
        return( <img src={image3} className='background'/> )
    }
}

export default Background