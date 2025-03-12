import SalesList from '../components/salesList';
import SearchBar from '../components/searchBar';
import helmetImg from '../assets/images/helmet.png'

export default function Accessories() {
    return (
        <div>
            <SearchBar placeholderText="Search for Accessories"/>
            <SalesList name='AGV PISTA' status='In Stock' image={helmetImg}/>
        </div>
    )
}