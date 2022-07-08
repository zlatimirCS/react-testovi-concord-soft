import React from "react";
import Tour from "./Tour";

import style from "./tours.module.scss";
const Tours = (props) => {
  console.log(props.tours);
  return (
    <div className={style.wrapper}>
      <Tour key={props.tours.id} tour={props.tours} />
    </div>
  );
};

export default Tours;
