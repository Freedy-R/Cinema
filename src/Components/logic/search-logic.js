import React, { createElement, useState } from "react";
import search from "../icons/search.png";
import ActiveSearch from "./activeSearch-logic";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);

  const ToggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
    {showSearch && <ActiveSearch/>}
      <button onClick={ToggleSearch} id="search_button">
        <img src={search} alt="wyszukaj" />
      </button>  
    </>
  );
}

export default Search;
