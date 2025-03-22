import '../assets/loader.css'
import YamahaSVG from '../assets/images/yamahaSVG.svg'

export default function Loader() {
    return (
        <>
             <div className="preloader">
                <img className='spinner' src={YamahaSVG} alt="" />
            </div>
        </>
    )
}