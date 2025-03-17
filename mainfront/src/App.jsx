import Navbar from "./components/navbar";
import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Home from "./routes/home";
import Motorcycles from "./routes/motorcycles";
import Accessories from "./routes/accessories";
import DetialsPage from './routes/DetialsPage'
import './index.css';

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const navbarSwitch = () => {
      const navbar = document.querySelector('ul');
      if (location.pathname === "/motorcycles" || location.pathname === "/accessories" || location.pathname === "/contact") {
        navbar.classList.add('switched');
      } else {
        navbar.classList.remove('switched');
      }
    };

    navbarSwitch(); 
  }, [location.pathname]); 

  return (
    <>
      <Navbar />
      <div className={isHome ? "" : "bodyMain"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="motorcycles" element={<Motorcycles />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="product/:productId" element={<DetialsPage />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
