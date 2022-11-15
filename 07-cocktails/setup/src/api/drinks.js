import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export default axios.create({
  baseURL: url,
});
