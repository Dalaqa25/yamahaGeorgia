import Navbar from "./components/navbar"
import { Routes, Route, useLocation } from "react-router"
import Home from "./routes/home"
import Contact from "./routes/contact"
import Motorcycles from "./routes/motorcycles"
import Accessories from "./routes/accessories"
import './index.css';

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";

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
