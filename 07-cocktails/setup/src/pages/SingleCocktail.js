import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = (props) => {
  const { type } = useParams();
  let coc;

  React.useEffect(() => {
    fetch(url + type)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .then((data) => {
        coc = data;
      });
  }, []);

  console.log(coc);

  return (
    <div>
      <h2>asdfafdadsfadfa</h2>
    </div>
  );
};

export default SingleCocktail;
