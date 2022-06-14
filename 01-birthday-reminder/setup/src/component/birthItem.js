import React from "react";
import style from "./birthItem.module.scss";

function BirthdayItem(props) {
  console.log(props.data);
  const { id, name, age, image } = props.data;

  return (
    <li className={style.item_wrapper}>
      <div className={style.item_container}>
        <div className={style.item_container_img}>
          <img src={image} alt={name} />
        </div>
        <div className={style.item_container_text}>
          <h4 className={style.item_container_text_name}>{name}</h4>
          <p className={style.item_container_text_age}>{age}</p>
        </div>
      </div>
    </li>
  );
}

export default BirthdayItem;
