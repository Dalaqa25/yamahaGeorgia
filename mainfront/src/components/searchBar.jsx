import '../../src/assets/searchbar.css';
import searchSvg from '../../src/assets/images/searchSVG.svg'

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" />
            <button className="search-Btn"><img src={searchSvg} alt="" /></button>
        </div>
    )
}