import { Link } from "react-router-dom"
import '../assets/navbar.css'
import yamahaSVG from '../assets/images/yamahaSVG.svg'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="logo" to="/">
                        <img className="logoSVG" src={yamahaSVG} alt="" />
                        <h2>YAMAH</h2>
                    </Link>
                </li>

                <div className="links">
                    <li><Link to="/accessories">Accessories</Link></li>
                    <li><Link to="/motorcycles">Motorcycles</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
            </ul>
        </nav>
    )
}