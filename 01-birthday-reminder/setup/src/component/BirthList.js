import React from "react";
import BirthdayItem from "./birthItem";
import style from "./birthList.module.scss";

function BirthdayList(props) {
  console.log(props.data);
  return (
    <div className={(style.list_wrapper, style.shrink)}>
      <h1 className={style.list_wrapper_headline}>
        <span>{props.data.length}</span>
        {props.data.length
          ? "Birthdays today"
          : "there is no any Birthday for today"}
      </h1>
      <ul className={style.list_container}>
        {props.data.map((bday) => {
          return <BirthdayItem key={bday.id} data={bday} />;
        })}
      </ul>
    </div>
  );
}

export default BirthdayList;
