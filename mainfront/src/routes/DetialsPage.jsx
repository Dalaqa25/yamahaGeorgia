import { useParams } from "react-router"
import { useState } from "react"
import '../../src/assets/detials.css'
import enginesvg from '../assets/images/engine.svg'
import ccsvg from '../assets/images/cc.svg'
import transimitionsvg from '../assets/images/transimition.svg'
import yearsvg from '../assets/images/year.svg'
import shopsvg from '../assets/images/shop.svg'
import r6 from '../assets/images/r6.png'
import mailSVG from '../assets/images/mail.svg'
import phoneSVG from '../assets/images/phone.svg'

export default function DetialsPage() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isContactBoxVisible, setisContactBoxVisible] = useState(false)

    return (
        <>
        <div className={`overlay ${isOverlayVisible ? "show" : ""}`} onClick={() => { setOverlayVisible(false); setisContactBoxVisible(false) }}></div>
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
                                <button onClick={() => {setOverlayVisible(true); setisContactBoxVisible(true)}}>Contact Seller</button>
                                <p style={{color:'#000'}}>$5100</p>
                            </div>
                        </div>

                        <div className="imgcontainer">
                            <img src={r6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h2 style={{marginBottom:'20px'}}>Description</h2>
                    <p>
                        The new headlight features a single bi-functional LED unit emitting both the low and high beam. Characterized by increased brightness (Class-D), the unit’s light weight and compactness has enabled the new highly aerodynamic fairing (cowling) design. To give the face a strong visual impact despite its compact size, LED position lights were placed on the outer extremes of the machine to not only keep the frontal projected area small but also to create the commanding appearance of a big bike.
                    </p>
                </div>
                <div className={`contact-box ${isContactBoxVisible ? "show" : ""}`}>
                    <h2 style={{textAlign:'center'}}>contact</h2>
                    <li style={{marginBottom:'10px', marginTop:'10px'}}><img src={mailSVG} alt="" /> g.dalaqishvili01@gmail.com</li>
                    <hr />
                    <li style={{marginTop:'10px',marginBottom:'10px'}}><img src={phoneSVG} alt="" />(+995) 598 24 14 75</li>
                </div>
            </div>
        </>
    )
}