import '../../assets/home.css';
import { Link } from 'react-router-dom';
import r6Img from '../../assets/images/r6.png'
import r1Img from '../../assets/images/r1.png'
import r6FImg from '../../assets/images/r6fliped.png'
import engineImg from '../../assets/images/engineIMG.png'
import { useState, useEffect } from 'react'


export default function MainHome() {

    const h2Text = ["faster.", "better.", "safely."]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % h2Text.length)
                setFade(true)
            }, 300)
        }, 3000)

        return () => clearInterval(interval)
    }, [h2Text.length])

    return (
        <>
            <div className='mainTxt'>
                <h1>Ride your bike</h1>
                <h2 className={fade ? 'fade-in' : 'fade-out'}>{h2Text[currentIndex]}</h2>
                <p>Yamaha Motors is a Japanese company known for motorcycles,<br/> marine products, and power equipment.</p>
            </div>
            <div className='btnContainer'>
                <Link className='motoBtn' to="/motorcycles">
                        Shop Motorcycles
                </Link>
            </div>

            <div className='mainImages'>
                <img src={r6Img} alt="" />
                <img src={r1Img} alt="" />
                <img src={r6FImg} alt="" />
            </div>

            <div className='middlePart'>
                <div className='middleTxt'>
                    <h1>Less.</h1>
                    <h1>More power</h1>
                    <p>
                        Yamaha is renowned for its high-performance and 
                        reliable engines across motorcycles, marine applications, ATVs, and 
                        power equipment, With decades of engineering expertise.
                    </p>
                </div>
                <img src={engineImg} alt="" />
            </div>

            
        </>
    )
}