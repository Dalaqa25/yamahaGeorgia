import SalesList from '../components/salesList';
import SearchBar from '../components/searchBar';

export default function Accessories() {
    return (
        <div>
            <SearchBar placeholderText="Search for Accessories"/>
            <SalesList/>
        </div>
    )
}