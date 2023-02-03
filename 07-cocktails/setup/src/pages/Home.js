import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
// import Loading from "../components/Loading";

const Home = () => {

  return (
    <>
      <SearchForm />
      <CocktailList />
    </>
  )
}

export default Home
