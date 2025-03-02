import '../../src/assets/toolbar.css';
import { useLocation } from 'react-router';
import { useState } from 'react';

export default function Toolbar() {
    const location = useLocation();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(30000);

    const getPageName = () => {
        switch (location.pathname) {
            case '/':
                return 'Home';
            case '/motorcycles':
                return 'Motorcycles';
            case '/accessories':
                return 'Accessories';
            case '/contact':
                return 'Contact';
            default:
                return '404';
        }
    };

    const handleMinPriceChange = (e) => {
        const value = Number(e.target.value);
        if (value <= maxPrice) {
            setMinPrice(value);
        }
    };

    const handleMaxPriceChange = (e) => {
        const value = Number(e.target.value);
        if (value >= minPrice) {
            setMaxPrice(value);
        }
    };

    return (
        <>
            <div className='toolbar'>
                <h2 style={{ textAlign: 'center', fontWeight: '300' }}>{getPageName()}</h2>
                <form action="">
                    <div className='slider-bar'>
                        <div className='slider-text'>
                            <input
                                className='price_input'
                                type="number"
                                min="0"
                                max="30000"
                                value={minPrice}
                                onChange={handleMinPriceChange}
                            />
                            <input
                                className='price_input'
                                type="number"
                                min="0"
                                max="30000"
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                            />
                        </div>
                        <div className='double-slider'>
                            <input
                                type="range"
                                min="0"
                                max="30000"
                                value={minPrice}
                                className='slider'
                                onChange={handleMinPriceChange}
                            />
                            <input
                                type="range"
                                min="0"
                                max="30000"
                                value={maxPrice}
                                className='slider'
                                onChange={handleMaxPriceChange}
                            />
                        </div>
                    </div>

                    <h2 style={{marginTop:'5vh', marginBottom:'1vh'}}>Products</h2>
                    <hr />

                </form>
            </div>
        </>
    );
}