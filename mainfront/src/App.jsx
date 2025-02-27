import Navbar from "./components/navbar"

import { Routes, Route } from "react-router"
import Home from "./routes/home"
import Contact from "./routes/contact"
import Motorcycles from "./routes/motorcycles"
import Accessories from "./routes/accessories"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="motorcycles" element={<Motorcycles />}/>
        <Route path="accessories" element={<Accessories />}/>
      </Routes>
    </>
  )
}

export default App
