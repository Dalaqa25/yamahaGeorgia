import Navbar from "./components/navbar"
import { Routes, Route, useLocation } from "react-router"
import { useEffect } from "react"
import Home from "./routes/home"
import Contact from "./routes/contact"
import Motorcycles from "./routes/motorcycles"
import Accessories from "./routes/accessories"
import './index.css';

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMotorcycles = location.pathname === "/motorcycles";
  const isAccessories = location.pathname === "/accessories";

  useEffect(() => {
    const navrbarSwich = () => {
      const navbar = document.querySelector('ul')
      if (location.pathname === isMotorcycles || isAccessories) {
        navbar.classList.add('switched')
      } else {
        navbar.classList.remove('switched')
      }
    };

    navrbarSwich();
  }, [isMotorcycles,isAccessories])

  return (
    <>
      <Navbar/>
      <div className={isHome ? "" : "bodyMain"}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="motorcycles" element={<Motorcycles />}/>
          <Route path="accessories" element={<Accessories />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
