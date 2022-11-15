import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  const { notFound } = useGlobalContext();
  return (
    <div>
      <h2>home page</h2>
      <SearchForm />
      {notFound ? (
        <p>No Cocktails Matched Your Search Criteria</p>
      ) : (
        <CocktailList />
      )}
    </div>
  );
};

export default Home;
