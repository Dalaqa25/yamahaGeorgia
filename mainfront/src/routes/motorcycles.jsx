import SalesList from '../components/salesList';
import SearchBar from '../components/searchBar';
import r1 from '../assets/images/r1.png'

export default function Motorcycles() {
    return (
        <div>
            <SearchBar placeholderText="Search for Motorcycle"/>
            <SalesList name='YZF R1' status='In Stock' image={r1}/>
        </div>
    )
}