import '../../src/assets/searchbar.css';
import searchSVG from '../../src/assets/images/searchSVG.svg';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <div className='search-bar-wrapper'>
                <input type="text" style={{textAlign:'center'}} placeholder="Search for a product" />
                <img src={searchSVG} alt="" />
            </div>
        </div>
    )
}