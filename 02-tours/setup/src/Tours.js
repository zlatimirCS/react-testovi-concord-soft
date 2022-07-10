import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const tours = props.data;

  return (
    <div>
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            data={tour}
            onTrigger={(id) => {
              props.onDelete(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default Tours;
