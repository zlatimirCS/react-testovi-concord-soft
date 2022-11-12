import Tour from "./Tour";

const Tours = ({ tours, deleteTour, fetchTours, loading }) => {
  const refreshHandler = () => {
    fetchTours();
    loading(true);
  };
  let content = null;
  if (tours.length === 0) {
    content = (
      <div className="no-tours">
        <h2>No Tours Left</h2>
        <button onClick={refreshHandler}>Refresh</button>
      </div>
    );
  } else {
    content = (
      <>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <ul>
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />;
          })}
        </ul>
      </>
    );
  }
  return <div className="tours">{content}</div>;
};

export default Tours;
