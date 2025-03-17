import { Link } from "react-router-dom"
import { useEffect } from "react"
import '../assets/navbar.css'
import yamahaSVG from '../assets/images/yamahaSVG.svg'

export default function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('ul');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav>
            <ul>
                <li>
                    <Link className="logo" to="/">
                        <img className="logoSVG" src={yamahaSVG} alt="" />
                        <h2>YAMAHA</h2>
                    </Link>
                </li>

                <div className="links">
                    <li><Link to="/accessories">Accessories</Link></li>
                    <li><Link to="/motorcycles">Motorcycles</Link></li>
                </div>
            </ul>
        </nav>
    )
}