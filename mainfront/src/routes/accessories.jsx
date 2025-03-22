import SearchBar from '../components/searchBar';
import AccessoriesList from '../components/accessoriesList';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Accessories() {
    const [accessories, setAccessories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/accessories');
                setAccessories(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchAccessories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <SearchBar placeholderText="Search for Accessories" />
            <AccessoriesList accessories={accessories} />
        </div>
    );
}