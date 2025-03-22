import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../src/assets/detials.css';
import mailSVG from '../assets/images/mail.svg';
import shopsvg from '../assets/images/shop.svg';
import phoneSVG from '../assets/images/phone.svg';

export default function AccessoryDetailsPage() {
    const { id } = useParams();
    const [accessory, setAccessory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isContactBoxVisible, setisContactBoxVisible] = useState(false);

    useEffect(() => {
        const fetchAccessory = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/accessories/${id}`);
                setAccessory(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchAccessory();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!accessory) {
        return <div>No accessory found</div>;
    }

    return (
        <>
            <div className={`overlay ${isOverlayVisible ? "show" : ""}`} onClick={() => { setOverlayVisible(false); setisContactBoxVisible(false) }}></div>
            <div className="container">
                <div className="details-container">
                    <h2 style={{ textAlign: 'left' }}>
                        <span style={{ fontWeight: '500' }}>{accessory.brand}</span>
                        <br />
                        <span style={{ fontSize: '35px' }}>{accessory.name}</span>
                    </h2>
                    <div className="row">
                        <div className="info">
                            <li><img src={accessory.image} alt="" /> {accessory.size}</li>
                            <li><img src={accessory.image} alt="" /> {accessory.brand}</li>
                            <li><img src={shopsvg} alt="" /> {accessory.inStock ? 'In Stock' : 'Out of Stock'}</li>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', gap: '10px' }}>
                                <button onClick={() => { setOverlayVisible(true); setisContactBoxVisible(true) }}>Contact Seller</button>
                                <p style={{ color: '#000' }}>${accessory.price}</p>
                            </div>
                        </div>

                        <div className="imgcontainer">
                           <img src={accessory.image} alt={accessory.name} />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h2 style={{ marginBottom: '20px' }}>Description</h2>
                    <p>{accessory.description}</p>
                </div>
                <div className={`contact-box ${isContactBoxVisible ? "show" : ""}`}>
                    <h2 style={{ textAlign: 'center' }}>Contact</h2>
                    <li style={{ marginBottom: '10px', marginTop: '10px' }}><img src={mailSVG} alt="" /> g.dalaqishvili01@gmail.com</li>
                    <hr />
                    <li style={{ marginTop: '10px', marginBottom: '10px' }}><img src={phoneSVG} alt="" />(+995) 598 24 14 75</li>
                </div>
            </div>
        </>
    );
}