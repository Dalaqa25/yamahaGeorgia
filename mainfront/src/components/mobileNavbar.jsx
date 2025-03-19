import '../assets/mobileNavBar.css';
import menuSVG from '../assets/images/menuSVG.svg';
import yamahaSVG from '../assets/images/yamahaSVG.svg';
import Xsvg from '../assets/images/X.svg'
import { useState } from 'react';
import { Link } from 'react-router';

export default function MobileNavBar() {
    const [showNavBox, setShowNavBox] = useState(false);

    function toggle() {
        setShowNavBox((prevState) => !prevState);
    }
    

    return (
        <>
            <div className='mobNav'>
                <img 
                    style={{width:'70px',marginLeft:'20px', borderRadius:'8px'}} 
                    src={yamahaSVG} alt="yamaha photo" 
                />
                <div className='MScontainer'>

                    <div onClick={toggle} className='MSbox' style={{marginRight:'20px'}}>
                        <img 
                            src={showNavBox ? Xsvg : menuSVG}
                            
                            alt="menu icon" 

                            style={{ width: '30px', transition: '0.3s' }} 
                        />
                    </div>
                </div>
            </div>

            {showNavBox && <div className='navBox'>
                <li className='mobLi'><Link to="/">Home</Link></li>
                <li className='mobLi'><Link to="/accessories">Accessories</Link></li>
                <li className='mobLi'><Link to="/motorcycles">Motorcycles</Link></li>
            </div>}
        </>
    );
}