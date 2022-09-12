import React, { useState, useEffect } from "react";

import BirthdayItem from "./birthItem";
import styles from "./birthList.module.scss";

function BirthdayList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, []);

  function clearAllBirthdays() {
    setData([]);
  }

  return (
    <div className={styles.list_wrapper}>
      <div className={styles.list_container}>
        <div className={styles.list_headline}>
          <h3>
            <span>{data.length}</span>
            {data.length
              ? " birthdays today"
              : " there is no any Birthday for today"}
          </h3>
        </div>

        {data.map((bday) => {
          return <BirthdayItem key={bday.id} data={bday} />;
        })}

        <div className={styles.list_action_container}>
          <button
            disabled={data.length === 0}
            className={styles.list_clear_btn}
            onClick={clearAllBirthdays}
          >
            {data.length ? "Clear All" : "Nothing to Clear"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BirthdayList;
