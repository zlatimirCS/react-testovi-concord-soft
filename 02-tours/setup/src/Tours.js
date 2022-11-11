import Tour from "./Tour";

const Tours = ({ tours }) => {
  let content = null;
  if (tours.length === 0) {
    content = (
      <>
        <h2>No Tours Left</h2>
        <button>Refresh</button>
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
                name={tour.name}
                price={tour.price}
                info={tour.info}
                image={tour.image}
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
