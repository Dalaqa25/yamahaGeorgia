import SalesList from '../components/salesList';
import SearchBar from '../components/searchBar';
import r1 from '../assets/images/r1.png'

export default function Motorcycles() {

    const motorcycles = [
        { id: "1", name: "YZF R1", image: r1, price: '18000$', status: 'in stock' },
        { id: "2", name: "YZF R6", image: r1, price: '18000$', status: 'in stock' },
    ];

    return (
        <div>
            <SearchBar placeholderText="Search for Motorcycle"/>
            {motorcycles.map((motorcycle) => (
                <SalesList key={motorcycle.id} id={motorcycle.id} name={motorcycle.name} status={motorcycle.status} image={motorcycle.image} />
            ))}       
        </div>
    )
}