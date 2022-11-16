import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/";

export default axios.create({
  baseURL: url,
});
