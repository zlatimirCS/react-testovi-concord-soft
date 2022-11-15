import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <h2>search your favorite cocktail</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={searchTerm} />
      </form>
    </div>
  );
};

export default SearchForm;
