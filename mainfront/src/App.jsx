import Navbar from "./components/navbar";
import Loader from "./components/loader";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavbar from './components/mobileNavbar'; 
import { Routes, Route, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Home from "./routes/home";
import Motorcycles from "./routes/motorcycles";
import Accessories from "./routes/accessories.jsx";
import DetialsPage from './routes/DetialsPage';
import AccessoryDetailsPage from "./routes/accesoriesDetials.jsx";
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

  //loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay 
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  //smooth scrolling
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
          {loading ? <Loader /> : (
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/motorcycles"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Motorcycles />
                  </motion.div>
                }
              />
              <Route
                path="/accessories"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Accessories />
                  </motion.div>
                }
              />
               <Route path="/accessory/:id" element={<AccessoryDetailsPage />} />
              <Route
                path="/product/:id"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <DetialsPage />
                  </motion.div>
                }
              />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
