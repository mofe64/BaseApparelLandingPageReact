import arrowIcon from './img/icon-arrow.svg'
const Search =() => 
    <div className="container-left-search">
        <form>
            <input type="search" name="email" className="email" placeholder="Email Address" required/>
            <button type="submit" className="btn"> 
                <img src={arrowIcon} alt="submit icon" className="hero"/>
            </button>
        </form>
    </div>

export default Search;