import React from "react";
import style from "./birthItem.module.scss";

function BirthdayItem(props) {
  const { name, age, image } = props.data;

  return (
    <div className={style.item_wrapper}>
      <div className={style.item_container}>
        <div className={style.item_container_img}>
          <img src={image} alt={name} />
        </div>
        <div className={style.item_container_text}>
          <h5 className={style.item_container_text_name}>{name}</h5>
          <p className={style.item_container_text_age}>{age} years</p>
        </div>
      </div>
    </div>
  );
}

export default BirthdayItem;
