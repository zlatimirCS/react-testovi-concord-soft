import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState ('Our Tours')

  const getData = () => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const result = await res.json(); 
      // console.log(result);
      setTours(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // console.log(tours.length);
    if (tours?.length > 0) {
      setTitle("Our tours")
    } else {
      setTitle("No Tours Left")
    }
  }, [tours])

  const deleteFromArray = (id) => {
    const newArray = tours.filter((tour) => {
      if (tour.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTours(newArray);
  };

  const renderList = () => {
    if (loading) {
      return <Loading />;
    }
    if (tours?.length > 0) {
      return (
        <Tours
          data={tours}
          onDelete={(id) => {
            deleteFromArray(id);
          }}
        />
      );
    } else {
      return <button className="btn" onClick={getData}>Refresh</button>;
    }
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2>{title}</h2>
          <div className="underline"></div>
        </div>
        {renderList()}
      </section>
    </main>
  );
}

export default App;
