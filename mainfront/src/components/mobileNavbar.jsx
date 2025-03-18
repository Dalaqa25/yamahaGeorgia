import '../assets/mobileNavBar.css'
import menuSVG from '../assets/images/menuSVG.svg'
import yamahaSVG from '../assets/images/yamahaSVG.svg'

export default function mobileNavBar() {
    return (
        <>
            <div className='mobNav'>
                <img 
                    style={{width:'70px',marginLeft:'20px', borderRadius:'8px'}} 
                    src={yamahaSVG} alt="yamaha photo" 
                />
                <div className='menu' style={{marginRight:'20px'}}>
                    <img style={{width:'30px'}}  src={menuSVG} alt="menu photo" /> 
                </div>
            </div>
        </>
    )
}