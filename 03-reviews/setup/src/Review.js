import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import styles from "./review.module.scss";

const Review = () => {
  const [newPerson, setNewPerson] = useState(0);

  function countLeft() {
    if (newPerson === 0) {
      setNewPerson(people.length - 1);
    } else {
      setNewPerson(newPerson - 1);
    }
  }

  function countRight() {
    if (newPerson === people.length - 1) {
      setNewPerson(0);
    } else {
      setNewPerson(newPerson + 1);
    }
  }

  function random() {
    let random = Math.floor(Math.random() * people.length);
    setNewPerson(random);
  }

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.item_img_container}>
        <div className={styles.item_img_background}></div>
        <div className={styles.faQuoteRight}>
          <FaQuoteRight color="white" />
        </div>
        <div className={styles.item_img}>
          <img src={people[newPerson].image} alt={people[newPerson].name} />
        </div>
      </div>
      <div className={styles.item_name_job}>
        <h5>{people[newPerson].name}</h5>
        <p>{people[newPerson].job}</p>
      </div>
      <div className={styles.item_description}>
        <p>{people[newPerson].text}</p>
      </div>
      <div className={styles.item_actions_wrapper}>
        <div className={styles.item_actions_container_shavron}>
          <div className={styles.item_actions_shavron_left}>
            <FaChevronLeft className={styles.chevron} onClick={countLeft} />
          </div>
          <div className={styles.item_actions_shavron_right}>
            <FaChevronRight className={styles.chevron} onClick={countRight} />
          </div>
        </div>
        <div className={styles.item_actions_button}>
          <button onClick={random}>click me</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
