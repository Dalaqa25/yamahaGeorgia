import '../../src/assets/sale.css'
import r6img from '../../src/assets/images/r6.png'
import { useState } from 'react'

export default function SalesList({name,status,image}) {

    const [ isHoverd, setIshoverd] = useState(false)

    return (
        <div className='main'>
            <div className='saleList-container'>
                <div className='box' 
                    onMouseEnter={() => setIshoverd(true)}
                    onMouseLeave={() => setIshoverd(false)}
                >
                    <img src={image} alt="r6img" />
                    <div style={{display:'flex', marginTop:'1vh',gap:'10px'}}>
                    {!isHoverd ? (
                        <div className="itemName">
                            <p style={{ color: "#000" }}>{name}</p>
                            <hr />
                            <p style={{ color: "#000",fontWeight:'bold' }}>{status}</p>
                        </div>
                        ) : (
                        <button>Learn more</button>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    )
}