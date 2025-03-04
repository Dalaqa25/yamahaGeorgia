import '../../src/assets/searchbar.css';
import searchSVG from '../../src/assets/images/searchSVG.svg';
import { useState } from 'react';

export default function SearchBar() {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(json => {
                const filteredData = json.filter((user) => {
                    return value &&
                     user &&
                      user.name && 
                      user.name.toLowerCase().includes(value.toLowerCase());
                });
                console.log(filteredData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="search-bar">
            <div className='search-bar-wrapper'>
                <input
                    type="text"
                    style={{ textAlign: 'center' }}
                    placeholder="Search for a product"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <img src={searchSVG} alt="Search Icon" />
            </div>
        </div>
    );
}