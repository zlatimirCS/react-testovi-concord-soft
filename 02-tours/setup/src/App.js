import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import Tours from "./Tours.js";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const data = await (await fetch(url)).json();
    setTours(data);
    setIsLoading(false);
  };

  let content;

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    content = <Loading />;
  } else if (tours) {
    console.log(tours);
    content = <Tours tours={tours} />;
  }

  return <main>{content}</main>;
}

export default App;
