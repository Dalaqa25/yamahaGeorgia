import { useState, useEffect } from 'react'
import './assets/App.css'

function App() {
  const array = ["giorgi", "levani"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length)
        setFade(true)
      }, 500) 
    }, 5000) 

    return () => clearInterval(interval) 
  }, [array.length])

  return (
    <>
      <h1 className={fade ? 'fade-in' : 'fade-out'}>{array[currentIndex]}</h1>
    </>
  )
}

export default App
