import '../../src/assets/sale.css'
import r6img from '../../src/assets/images/r6.png'
import { useState } from 'react'

export default function SalesList() {

    const [ isHoverd, setIshoverd] = useState(false)

    return (
        <div className='main'>
            <div className='saleList-container'>
                <div className='box'
                        onMouseEnter={() => setIshoverd(true)}
                        onMouseLeave={() => setIshoverd(false)}>
                    <img src={r6img} alt="r6img" />
                    <div style={{display:'flex', gap:'10px'}}>
                        <p style={{color:'#000'}}>YZF R6</p>
                        <hr />
                        <p style={{color:'#000'}}>In stock</p>
                    </div>
                    {isHoverd && (
                        <button className='readMoreBtn'>Learn more</button>
                    )}
                </div>
            </div> 
        </div>
    )
}