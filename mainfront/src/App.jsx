import Navbar from "./components/navbar";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavbar from './components/mobileNavbar'; 
import { Routes, Route, useLocation, Form } from "react-router";
import { useEffect, useState } from "react";
import Home from "./routes/home";
import Motorcycles from "./routes/motorcycles";
import Accessories from "./routes/accessories";
import DetialsPage from './routes/DetialsPage';
import './index.css';
import Lenis from "lenis";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 }
};


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  //smoth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enables smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup when component unmounts
      lenis.destroy();
    };
  }, []);

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
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {["/", "/motorcycles", "/accessories", "/product/:productId"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
              >
                {path === "/" && <Home />}
                {path === "/motorcycles" && <Motorcycles />}
                {path === "/accessories" && <Accessories />}
                {path.startsWith("/product") && <DetialsPage />}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
      </div>
    </>
  );
}

export default App;
