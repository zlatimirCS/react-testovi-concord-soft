import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputValue = useRef();
  const handleChange = () => {
    setSearchTerm(inputValue.current.value);
  };
  return (
    <div className="search-container">
      <label htmlFor="search">search your favorite cocktail</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          ref={inputValue}
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
    </div>
  );
};

export default SearchForm;
