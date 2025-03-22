import { useState, useEffect } from 'react';
import axios from 'axios';
import SalesList from '../components/salesList';
import SearchBar from '../components/searchBar';

export default function Motorcycles() {
    const [motorcycles, setMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMotorcycles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products');
                setMotorcycles(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchMotorcycles();
    }, []);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <SearchBar placeholderText="Search for Motorcycle" />
            <SalesList motorcycles={motorcycles} />
        </div>
    );
}