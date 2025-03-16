import { useParams } from "react-router"
import '../../src/assets/detials.css'
import enginesvg from '../assets/images/engine.svg'
import ccsvg from '../assets/images/cc.svg'
import transimitionsvg from '../assets/images/transimition.svg'
import yearsvg from '../assets/images/year.svg'
import shopsvg from '../assets/images/shop.svg'
import r6 from '../assets/images/r6.png'

export default function DetialsPage() {
    const { productId } = useParams();

    return (
        <div className="container">
            <div className="detials-container">
                <h2 style={{textAlign:'left'}}>
                    <span style={{fontWeight:'500', }}>YAMAHA</span>
                    <br/>
                    <span style={{fontSize:'35px'}}>YZF R3</span>
                </h2>
                <div className="row">
                    <div className="info">
                        <li><img src={enginesvg} alt="" /> 4-stroke, 2-cylinder, Liquid-cooled, DOHC, 4-valves</li>
                        <li><img src={ccsvg} alt="" />321cc 30.9 kW (42.0 PS) @ 10,750 rpm</li>
                        <li><img src={transimitionsvg} alt="" />Constant Mesh, 6-speed</li>
                        <li><img src={yearsvg} alt="" /> year: 2023</li>
                        <li><img src={shopsvg} alt="" /> In Stock</li>
                        <div style={{display:'flex', justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'column', gap:'10px'}}>   
                            <button>Contact Seller</button>
                            <p style={{color:'#000'}}>$5100</p>
                        </div>
                    </div>

                    <div className="imgcontainer">
                        <img src={r6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}