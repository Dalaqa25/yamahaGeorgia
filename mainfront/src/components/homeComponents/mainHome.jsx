import '../../assets/home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function MainHome() {

    const h2Text = ["faster.", "better.", "safely.", "more reliable."]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % h2Text.length)
                setFade(true)
            }, 500)
        }, 5000)

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
        </>
    )
}