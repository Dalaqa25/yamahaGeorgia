import { useState, useEffect, useRef } from 'react';
import './assets/App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Click me!</button>
      <div ref={ref} className={`box ${isVisible ? 'Active' : 'Inactive'}`}></div>
    </>
  );
}

export default App;
