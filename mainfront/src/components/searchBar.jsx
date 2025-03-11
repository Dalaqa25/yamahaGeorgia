import '../../src/assets/searchbar.css';
import SearchResult from './searchResult';
import searchSVG from '../../src/assets/images/searchSVG.svg';
import { useState } from 'react';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [placeholder, setPlaceholder] = useState("Search for product");
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [searchResults, setSearchResults] = useState(false);

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
                setResults(filteredData); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    function toggleSearchResults() {
        setSearchResults(prevResults => !prevResults);
    }

    return (
        <div className="search-bar-container">
            <div className={`overlay ${isOverlayVisible ? "show" : ""}`} onClick={() => setOverlayVisible(false)}></div>
            <div className="search-bar">
                <div className='search-bar-wrapper' onClick={toggleSearchResults}>
                    <input
                        type="text"
                        style={{ textAlign: 'center' }}
                        placeholder={placeholder}
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                        onFocus={() => {
                            setPlaceholder("");
                            setOverlayVisible(true);
                        }}
                        onBlur={(e) => {
                            if (e.target.value === "") {
                                setPlaceholder("Search for product");
                            }
                            setOverlayVisible(false);
                        }}
                    />
                    <img src={searchSVG} alt="Search Icon" />
                </div>
                <div className="search-result-list">
                    {results.map((result, index) => (
                        <div key={index} className="search-result-item">
                            {result.name}
                        </div>
                    ))} 
                   
                </div>
            </div>
        </div>
    );
}