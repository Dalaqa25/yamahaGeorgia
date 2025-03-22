import { useNavigate } from 'react-router-dom';
import '../assets/productBox.css';

export default function ProductBox({ id, name, status, image, type }) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        if (type === 'motorcycle') {
            navigate(`/product/${id}`);
        } else if (type === 'accessory') {
            navigate(`/accessory/${id}`);
        }
    };

    return (
        <div className='box' onClick={handleClick}>
            <img src={image} alt={name} />
            <div style={{ display: 'flex', marginTop: '1vh', gap: '10px' }}>
                <div className="itemName">
                    <p style={{ color: "#000" }}>{name}</p>
                    <hr />
                    <p style={{ color: "#000", fontWeight: 'bold' }}>{status}</p>
                </div>
            </div>
        </div>
    );
}