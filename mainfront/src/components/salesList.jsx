import '../../src/assets/sale.css';
import { useNavigate } from 'react-router-dom';

export default function SalesList({ id, name, status, image }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className='main'>
            <div className='saleList-container'>
                <div className='box' 
                    onClick={handleClick}
                    onMouseEnter={() => setIshoverd(true)}
                    onMouseLeave={() => setIshoverd(false)}
                >
                    <img src={image} alt="r6img" />
                    <div style={{display:'flex', marginTop:'1vh',gap:'10px'}}>
                        <div className="itemName">
                            <p style={{ color: "#000" }}>{name}</p>
                            <hr />
                            <p style={{ color: "#000",fontWeight:'bold' }}>{status}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}