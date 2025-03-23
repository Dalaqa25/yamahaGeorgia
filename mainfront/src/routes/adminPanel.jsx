import AdminContent from "../components/adminContent";
import "../assets/admin.css"
import { useState, useEffect } from "react";

export default function AdminPanel() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [lockoutTimer, setLockoutTimer] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        if (attempts >= 3) {
          setIsLocked(true);
          setLockoutTimer(300); // 5 minutes (300 seconds)
    
          const interval = setInterval(() => {
            setLockoutTimer((prev) => prev - 1);
          }, 1000);
    
          setTimeout(() => {
            setIsLocked(false);
            setAttempts(0);
          }, 300000); // 5 minutes in milliseconds
    
          return () => clearInterval(interval);
        }
      }, [attempts]);

      const handleLogin = (e) => {
        e.preventDefault();
    
        // Simple check for username and password
        if (username === "yamahaAdmin" && password === "tatogiorgi123") {
          setIsAuthenticated(true);
        } else {
          setAttempts((prev) => prev + 1);
          alert("Invalid credentials. Try again.");
        }
      };

      if (isLocked) {
        return <p style={{textAlign: "center", color: "red"}}>Too many failed attempts. Try again in {lockoutTimer} seconds.</p>;
      }
    
      if (isAuthenticated) {
        return <AdminContent />;
      }

    return (
        <div className="admin-login-container">
            <form className="admin-login-form" onSubmit={handleLogin}>
                <h2 style={{textAlign: "center"}}>Admin Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Admin Name"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button className="admin-login-button" type="submit">Login</button>
                {attempts > 0 && <p>Failed attempts: {attempts}/3</p>}
                </form>        
        </div>
    )
}
