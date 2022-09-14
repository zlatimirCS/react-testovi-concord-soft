import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  return (
    <div>
      <Tour
        key={props.tours.id}
        tour={props.tours}
        delete={props.notInterested}
      />
    </div>
  );
};

export default Tours;
