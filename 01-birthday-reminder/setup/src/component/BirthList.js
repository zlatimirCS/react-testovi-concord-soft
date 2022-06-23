import React, { useState, useEffect } from "react";
import BirthdayItem from "./birthItem";
import style from "./birthList.module.scss";

function BirthdayList(props) {
  const defaultData = props.data;
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
    console.log("ocitano");
  }, []);

  console.log(data);

  function clearAllBirthdays(e) {
    setData([]);
    console.log(data);
  }

  return (
    <div className={(style.list_wrapper, style.shrink)}>
      <h1 className={style.list_wrapper_headline}>
        <span>{data.length}</span>
        {data.length ? "birthdays today" : "there is no any Birthday for today"}
      </h1>
      <ul className={style.list_container}>
        {data.map((bday) => {
          return <BirthdayItem key={bday.id} data={bday} />;
        })}
      </ul>
      <div className={style.list_action_container}>
        <button
          disabled={data.length === 0}
          className={style.list_clear_btn}
          onClick={clearAllBirthdays}
        >
          {data.length ? "Clear All" : "Nothing to Clear"}
        </button>
      </div>
    </div>
  );
}

export default BirthdayList;
