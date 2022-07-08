import React, { useState } from "react";
import style from "./tour.module.scss";

const Tour = (props) => {
  const { id, name, image, info, price } = props.tour;
  return (
    <article className={style.wrapper}>
      {/* image */}
      <figure className={style.container_img}>
        <img src={image} alt={name} />
      </figure>
      {/* headline with price */}
      <div>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
      {/* info about place */}
      <div>
        <p>{info}</p>
      </div>
      {/* actions */}
    </article>
  );
};

export default Tour;
