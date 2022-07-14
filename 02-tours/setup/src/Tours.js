import React from "react";
import Tour from "./Tour";

import style from "./tours.module.scss";
const Tours = (props) => {
  console.log(props);
  return (
    <div className={style.wrapper}>
      <Tour
        key={props.tours.id}
        tour={props.tours}
        delete={props.notInterested}
      />
    </div>
  );
};

export default Tours;
