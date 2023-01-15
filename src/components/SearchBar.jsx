import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import searchStyle from "../styles/searchStyles.module.css";
import { getDataApi } from "../utils/getAPI";
// search bar component
function SearchBar() {
  const [searchtext, setSearchText] = useState("");
  const { productData, setProductData } = useContext(AppContext);
  // function for free search functionality
  let wholeQuerySearch = (query,data) => {
    let searchData = data.filter(
      (item) =>
        item.name.toLowerCase() == query.toLowerCase() ||
        item.color.toLowerCase() == query.toLowerCase() ||
        item.type.toLowerCase() == query.toLowerCase()
    );
    return searchData;
  };
//searching by splitting the query
  let splitQuerySearch = (splitQuery, data) => {
    let res;
    for (let i = 0; i < splitQuery.length; i++) {
        //filter result from the given data for the first element of the query
      if (i == 0) {
        let searchArray = data.filter(
          (item) =>
            splitQuery[i].toLowerCase() == item.name.toLowerCase() ||
            splitQuery[i].toLowerCase() == item.type.toLowerCase() ||
            splitQuery[i].toLowerCase() == item.color.toLowerCase()
        );
        res=searchArray
      }
      //filter again again for further query from the filtered array
      else{
        let searchArray = res.filter(
            (item) =>
              splitQuery[i].toLowerCase() == item.name.toLowerCase() ||
              splitQuery[i].toLowerCase() == item.type.toLowerCase() ||
              splitQuery[i].toLowerCase() == item.color.toLowerCase()
          );
          res=searchArray
      }
    }
    return res
  };
  let searchQuery = async (query) => {
    //spliting the query
    let queryArr = query.trim().split(" ");
    let data = await getDataApi();
    //searching for full query
      let totalResult=wholeQuerySearch(query, data);
    //search result by spliting query
   if (queryArr.length>1){
    let singleSearch=splitQuerySearch(queryArr, data)
    //removing the dulicate results
    let finalSingleSearch=singleSearch.filter(item=> item.name.toLowerCase()!==query.toLowerCase())
    totalResult.push(...finalSingleSearch); 
   }
   setProductData(totalResult)
  };

  return (
    <div className={searchStyle.searchbox}>
      <input
        type="search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className={searchStyle.search_bar}
        placeholder="Search for products"
      ></input>
      <button
        className={searchStyle.btn}
        onClick={() => {
          searchQuery(searchtext, productData);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
