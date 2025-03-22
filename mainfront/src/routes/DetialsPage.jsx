import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../src/assets/detials.css';
import enginesvg from '../assets/images/engine.svg';
import transimitionsvg from '../assets/images/transimition.svg';
import yearsvg from '../assets/images/year.svg';
import shopsvg from '../assets/images/shop.svg';
import mailSVG from '../assets/images/mail.svg';
import phoneSVG from '../assets/images/phone.svg';

export default function DetailsPage() {
    const { id } = useParams();
    const [motorcycle, setMotorcycle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isContactBoxVisible, setisContactBoxVisible] = useState(false);

    useEffect(() => {
        const fetchMotorcycle = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/${id}`);
                console.log("Fetched motorcycle:", response.data.data);
                setMotorcycle(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching motorcycle:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchMotorcycle();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!motorcycle) {
        return <div>No motorcycle found</div>;
    }

    return (
        <>
            <div className={`overlay ${isOverlayVisible ? "show" : ""}`} onClick={() => { setOverlayVisible(false); setisContactBoxVisible(false) }}></div>
            <div className="container">
                <div className="details-container">
                    <h2 style={{ textAlign: 'left' }}>
                        <span style={{ fontWeight: '500' }}>{motorcycle.brand}</span>
                        <br />
                        <span style={{ fontSize: '35px' }}>{motorcycle.name}</span>
                    </h2>
                    <div className="row">
                        <div className="info">
                            <li><img src={enginesvg} alt="" /> {motorcycle.engine}</li>
                            <li><img src={transimitionsvg} alt="" /> {motorcycle.transmission}</li>
                            <li><img src={yearsvg} alt="" /> year: {motorcycle.year}</li>
                            <li><img src={shopsvg} alt="" /> {motorcycle.inStock ? 'In Stock' : 'Out of Stock'}</li>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', gap: '10px' }}>
                                <button onClick={() => { setOverlayVisible(true); setisContactBoxVisible(true) }}>Contact Seller</button>
                                <p style={{ color: '#000' }}>${motorcycle.price}</p>
                            </div>
                        </div>

                        <div className="imgcontainer">
                            <img src={motorcycle.image} alt={motorcycle.name} />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h2 style={{ marginBottom: '20px' }}>Description</h2>
                    <p>{motorcycle.description}</p>
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