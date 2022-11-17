import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  const { notFound } = useGlobalContext();
  return (
    <div className="home-container">
      <SearchForm />
      {notFound ? (
        <h2 className="no-match">No Cocktails Matched Your Search Criteria</h2>
      ) : (
        <CocktailList />
      )}
    </div>
  );
};

export default Home;
