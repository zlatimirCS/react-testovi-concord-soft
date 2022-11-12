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

  const deleteTour = (id) => {
    const filteredTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(filteredTours);
  };

  let content;

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    content = <Loading />;
  } else if (tours) {
    content = (
      <Tours
        tours={tours}
        deleteTour={deleteTour}
        fetchTours={fetchTours}
        loading={setIsLoading}
      />
    );
  }

  return <main className="container">{content}</main>;
}

export default App;
