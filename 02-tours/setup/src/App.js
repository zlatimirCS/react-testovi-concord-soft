import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

import style from "./app.module.scss";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div>
        <div>
          <h1>Our Tours</h1>
        </div>
        {items.map((item) => (
          <div className={style.wrapper} key={item.id}>
            <Tours tours={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
