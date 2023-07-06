import React, { useState } from "react";
import "./List.css";

const List = ({ people }) => {
  const [birthdayCount, setBirthayCount] = useState(people.length);
  const [peopleList, setPeopleList] = useState(people);

  const clearBirthdays = () => {
    setBirthayCount(0);
    setPeopleList([]);
  }
  return (
   <div className="section"> 
      <h3>{birthdayCount} birthdays today</h3>
      {peopleList.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <div className="slika">
            <img src={image} alt={name} />
            </div>
            <div className="data">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
                  <button className="clear" onClick={clearBirthdays}>Clear All</button>

      </div>
  
  );
};

export default List;
