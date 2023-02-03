import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const {keyword, setKeyword} = useGlobalContext();

  const search = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" onChange={search} defaultValue={keyword}/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
