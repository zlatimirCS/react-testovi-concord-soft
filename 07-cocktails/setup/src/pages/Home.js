import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <h2>home page</h2>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
