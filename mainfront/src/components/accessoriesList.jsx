import '../../src/assets/sale.css';
import ProductBox from './productBox';

export default function AccessoriesList({ accessories }) {
    return (
        <div className='main'>
            <div className='saleList-container'>
                {accessories.map((accessory) => (
                    <ProductBox 
                        key={accessory.id}
                        id={accessory.id}
                        name={accessory.name}
                        image={accessory.image}
                        status={accessory.inStock ? 'In Stock' : 'Out of Stock'}
                        type="accessory"
                    /> 
                ))}
            </div>
        </div>
    );
}