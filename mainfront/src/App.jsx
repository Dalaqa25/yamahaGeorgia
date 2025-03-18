import Navbar from "./components/navbar";
import MobileNavbar from './components/mobileNavbar'; // Ensure correct import and naming
import { Routes, Route, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Home from "./routes/home";
import Motorcycles from "./routes/motorcycles";
import Accessories from "./routes/accessories";
import DetialsPage from './routes/DetialsPage';
import './index.css';

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  //navbar state
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobNavBar, setMobNavBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 660) {
        setShowNavbar(false);
        setMobNavBar(true);
      } else {
        setShowNavbar(true);
        setMobNavBar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showNavbar && <Navbar />}
      {mobNavBar && <MobileNavbar />} 
      <div className={isHome ? "" : "bodyMain"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="motorcycles" element={<Motorcycles />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="product/:productId" element={<DetialsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
