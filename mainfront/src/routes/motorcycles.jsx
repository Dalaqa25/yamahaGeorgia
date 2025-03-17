import SalesList from '../components/salesList';
import SearchBar from '../components/searchBar';


export default function Motorcycles() {
    return (
        <div>
            <SearchBar placeholderText="Search for Motorcycle"/>
            <SalesList />     
        </div>
    )
}