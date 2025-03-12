import '../../src/assets/searchbar.css';
import searchSVG from '../../src/assets/images/searchSVG.svg';
import { useState } from 'react';

export default function SearchBar({placeholderText}) {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [placeholder, setPlaceholder] = useState(placeholderText);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [searchResultVisible, setSearchResultVisible] = useState(false);

    const defaultSearchResult = ["YZF R1", "YZF R7", "YZF R6", "YZF R3"]

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

    return (
        <>
        <div className={`overlay ${isOverlayVisible ? "show" : ""}`} onClick={() => setOverlayVisible(false)}></div>

            <div className="search-bar-container"> 
                <div className="search-bar">
                    <div className='search-bar-wrapper' onClick={ () => setSearchResultVisible(!searchResultVisible)}>
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
                                    setPlaceholder(placeholderText);
                                }
                                setOverlayVisible(false);
                            }}
                        />
                        <img src={searchSVG} alt="Search Icon" />
                    </div>
                </div>
                <div className={`search-result-list ${searchResultVisible ? "showResult": "NotShowResult"}`}>
                        {results.map((result, index) => (
                            <div key={index} className="search-result-item">
                                {result.name}
                            </div>
                        ))} 
                        {defaultSearchResult.map((defaultResult, index) =>(
                            <div key={index} className='search-result-item'>
                                {defaultResult}
                            </div>
                        ))}
                </div>
            </div>
            
        </>
 
    );
}