import '../../assets/home.css';
import { Link } from 'react-router-dom';
export default function MainHome() {
    return (
        <>
            <div className='mainTxt'>
                <h1>Ride your bike</h1>
                <h2>faster.</h2>
                <p>Yamaha Motors is a Japanese company known for motorcycles,<br/> marine products, and power equipment.</p>
            </div>
            <div className='btnContainer'>
                <Link className='motoBtn' to="/motorcycles">
                        Shop Motorcycles
                </Link>
            </div>
        </>
    )
}