import '../assets/mobileNavBar.css';
import menuSVG from '../assets/images/menuSVG.svg';
import yamahaSVG from '../assets/images/yamahaSVG.svg';
import { useState } from 'react';

export default function MobileNavBar() {
    // navigation box state 
    const [showNavBox, setShowNavBox] = useState(false);

    return (
        <>
            {showNavBox && <div className='overlay' onClick={() => setShowNavBox(false)}></div>}
            <div className='mobNav'>
                <img 
                    style={{width:'70px',marginLeft:'20px', borderRadius:'8px'}} 
                    src={yamahaSVG} alt="yamaha photo" 
                />
                <div className='MScontainer'>
                    {/* adding on click event */}
                    <div onClick={() => setShowNavBox(true)} className='MSbox' style={{marginRight:'20px'}}>
                        <img style={{width:'30px'}}  src={menuSVG} alt="menu photo" /> 
                    </div>
                </div>
            </div>

            {showNavBox && <div className='navBox'>Navigation Content</div>}
        </>
    );
}