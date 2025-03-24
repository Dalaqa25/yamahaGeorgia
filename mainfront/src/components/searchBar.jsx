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

    const handleClick = (id, type) => {
        const url = type === 'accessory' ? `/accessory/${id}` : `/product/${id}`;
        navigate(url);
    };

    // Click outside the box
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
        const api1 = "https://yamahageorgia-backend.onrender.com/api/accessories";
        const api2 = "https://yamahageorgia-backend.onrender.com/api/products";

        Promise.all([fetch(api1), fetch(api2)])
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(dataArray => {
                const [accessoriesData, motorcyclesData] = dataArray;

                let combinedData = [];

                if (accessoriesData.success && Array.isArray(accessoriesData.data)) {
                    combinedData = combinedData.concat(accessoriesData.data.map(item => ({ ...item, type: 'accessory' })));
                }

                if (motorcyclesData.success && Array.isArray(motorcyclesData.data)) {
                    combinedData = combinedData.concat(motorcyclesData.data.map(item => ({ ...item, type: 'product' })));
                }

                const filteredData = combinedData.filter(item =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                );

                setResults(filteredData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setResults([]);
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
                                <div onClick={() => handleClick(result.id, result.type)} key={index} className="search-result-item">
                                    <div className='search-result-item-wrapper'>
                                        <div className='search-result-item-image'>
                                            <img src={result.image} alt={result.name} />
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