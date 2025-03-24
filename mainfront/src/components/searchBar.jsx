import '../../src/assets/searchbar.css';
import searchSVG from '../../src/assets/images/searchSVG.svg';
import noSearch from '../../src/assets/images/noSearch.svg';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

export default function SearchBar({ placeholderText, id }) {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [placeholder, setPlaceholder] = useState(placeholderText);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [searchResultVisible, setSearchResultVisible] = useState(false);
    const navigate = useNavigate();
    const searchResultRef = useRef(null);

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    // click outside the box 
    useEffect(() => {
        const handle = (event) => {
            if (searchResultRef.current && !searchResultRef.current.contains(event.target)) {
                setSearchResultVisible(false);
            }
        };

        document.addEventListener("mousedown", handle);

        return () => {
            document.removeEventListener("mousedown", handle);
        };
    }, []);

    const fetchData = (value) => {
        fetch("https://yamahageorgia-backend.onrender.com/api/products")
            .then(response => response.json())
            .then(json => {
                console.log("Fetched Data:", json);
                if (json.success && Array.isArray(json.data)) {
                    const filteredData = json.data.filter(item =>
                        item.name.toLowerCase().includes(value.toLowerCase())
                    );
                    setResults(filteredData);
                } else {
                    console.error("Invalid data format or unsuccessful response");
                    setResults([]);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
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
                    <div className='search-bar-wrapper' onClick={() => setSearchResultVisible(!searchResultVisible)}>
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
                <div ref={searchResultRef} className={`search-result-list ${searchResultVisible ? "showResult" : "NotShowResult"}`}>
                    {input.trim() !== "" ? (
                        results.length > 0 ? (
                            results.map((result, index) => (
                                <div onClick={() => handleClick(result.id)} key={index} className="search-result-item">
                                    <div className='search-result-item-wrapper'>
                                    <div className='search-result-item-image'>
                                        <img src={result.image}/>
                                    </div>
                                        <span>{result.name}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='no-results-message' style={{ textAlign: 'center', fontWeight: 'bolder', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                No results found
                                <img style={{ width: '250px' }} src={noSearch} alt="" />
                            </div>
                        )
                    ) : (
                        <div className='no-results-message' style={{ textAlign: 'center', fontWeight: 'bolder', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            Start Searching
                            <img style={{ width: '250px' }} src={noSearch} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}