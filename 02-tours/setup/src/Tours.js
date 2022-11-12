import Tour from "./Tour";

const Tours = ({ tours, deleteTour, fetchTours, loading }) => {
  const refreshHandler = () => {
    fetchTours();
    loading(true);
  };
  let content = null;
  if (tours.length === 0) {
    content = (
      <>
        <h2>No Tours Left</h2>
        <button onClick={refreshHandler}>Refresh</button>
      </>
    );
  } else {
    content = (
      <>
        <h2>Our Tours</h2>
        <ul>
          {tours.map((tour) => {
            return (
              <Tour
                key={tour.id}
                tour={tour}
                // id={tour.id}
                // name={tour.name}
                // price={tour.price}
                // info={tour.info}
                // image={tour.image}
                deleteTour={deleteTour}
              />
            );
          })}
        </ul>
      </>
    );
  }
  return <div className="tours">{content}</div>;
};

export default Tours;
