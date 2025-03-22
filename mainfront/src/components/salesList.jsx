import '../../src/assets/sale.css';
import ProductBox from './productBox';

export default function SalesList({ motorcycles }) {
    return (
        <div className='main'>
            <div className='saleList-container'>
                {motorcycles.map((motorcycle) => (
                    <ProductBox
                        key={motorcycle.id}
                        id={motorcycle.id}
                        name={motorcycle.name}
                        image={motorcycle.image}
                        price={motorcycle.price}
                        status={motorcycle.inStock ? 'In Stock' : 'Out of Stock'}
                        type="motorcycle"
                    />
                ))}
            </div>
        </div>
    );
}