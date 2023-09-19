import React from 'react'
import "./searchBar.css"
import { useFilter } from '../context/filterContext'
const SearchBar = () => {
   const {filterDispatch} = useFilter();
    const handleInput = (e)=> {
        filterDispatch({
            type: "SEARCH_FILTER",
            payload: e.target.value
        })
    }
  return (
    <div>
              <input
            className="search-box padding-all-8"
            type="text"
            placeholder="Search"
            onChange={(e) => handleInput(e)}
          />
           <span class="material-icons-outlined search-icon absolute">
            search
            </span>
    </div>
  )
}

export default SearchBar