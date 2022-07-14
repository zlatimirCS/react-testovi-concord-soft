import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

import style from "./app.module.scss";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  var duplicate = [];
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          duplicate = [...result];
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function notInterestedHanddler(id) {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className={style.wrapper_headline}>
        <div className={style.container}>
          <h2 className={style.headline}>Our Tours</h2>
          <div className={style.underline}></div>
        </div>
        {items.map((item) => (
          <div className={style.wrapper} key={item.id}>
            <Tours tours={item} notInterested={notInterestedHanddler} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
