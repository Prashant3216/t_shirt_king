import React from 'react'
import searchStyle from "../styles/searchStyles.module.css"
// search bar component
function SearchBar() {
  return (
    <div className={searchStyle.searchbox}>
        <input type="search" className={searchStyle.search_bar} placeholder="Search for products"></input>
        <button className={searchStyle.btn}>Search</button>
    </div>
    
  )
}

export default SearchBar