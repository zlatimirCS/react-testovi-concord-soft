import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const global = useGlobalContext();
  console.log();

  function searchHandler(e) {
    global.searchCoctails(e.target.value);
  }
  return (
    <form className="search-form" onKeyUp={searchHandler}>
      <div className="form-control">
        <label htmlFor="name">search your favorite cocktail</label>
        <input id="name" type="text" name="name" />
      </div>
    </form>
  );
};

export default SearchForm;
