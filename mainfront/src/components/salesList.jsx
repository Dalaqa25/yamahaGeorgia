import '../../src/assets/sale.css';
import r1 from '../assets/images/r1.png'
import ProductBox from './productBox'

export default function SalesList() {

    const motorcycles = [
        { id: "1", name: "YZF R1", image: r1, price: '18000$', status: 'in stock' },
        { id: "2", name: "YZF R6", image: r1, price: '18000$', status: 'in stock' },
        { id: "2", name: "YZF R6", image: r1, price: '18000$', status: 'in stock' },
        { id: "2", name: "YZF R6", image: r1, price: '18000$', status: 'in stock' }
    ];

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
                            status={motorcycle.status}
                        />
                ))}
            </div> 
        </div>
    );
}