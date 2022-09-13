import React, { useState } from "react";
import style from "./tour.module.scss";

const Tour = (props) => {
  const { id, name, image, info, price } = props.tour;
  const [isReadMore, setIsReadMore] = useState(false);

  let priceUS = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price.replace(",", ""));

  function toggleIsReadMore() {
    if (isReadMore) {
      setIsReadMore(false);
    } else {
      setIsReadMore(true);
    }
  }

  return (
    <article className={style.wrapper}>
      {/* image */}
      <figure className={style.container_img}>
        <img src={image} alt={name} />
      </figure>
      {/* headline with price */}
      <div className={style.info_wrapper}>
        <div className={style.headline_price_container}>
          <div className={style.headline}>
            <h3>{name}</h3>
          </div>
          <div className={style.price}>
            <p>{priceUS}</p>
          </div>
        </div>
        {/* info about place */}
        <div className={style.info_container}>
          <p>
            {isReadMore ? info : info.substr(0, 200) + "..."}
            <button onClick={toggleIsReadMore} className={style.read_btn}>
              {isReadMore ? "show less" : "read more"}
            </button>
          </p>
        </div>
        {/* actions */}
        <div className={style.actions_container}>
          <button
            className={style.actions_btn}
            onClick={() => {
              props.delete(id);
            }}
          >
            Not Interested
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tour;
