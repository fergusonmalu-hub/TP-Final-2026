import "./searchBar.css";
import searchIcon from "../../../assets/icons/search.png";


function SearchBar({ search, setSearch }) {
    return (
        <div className="search-bar">
            <div className="search-input">
                <img src={searchIcon} alt="Search icon" />
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    );
}

export default SearchBar;