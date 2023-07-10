import React, { useState } from "react";
import "./List.css";

const List = ({ people }) => {
  const [peopleList, setPeopleList] = useState(people);
  const [peopleListCount, setPeopleListCount] = useState(people.length);


const clearList = () => {
  setPeopleList([]);
  setPeopleListCount(0);
}

return (
  <div className="section">
    <h3>{peopleListCount} birthdays</h3>
    { peopleList.map((person) => {
      const {id, name, age, image } = person;

      return (
        <article key={id} className="person">
          <div className="slika">
            <img src={image} alt={name}></img>
          </div>
          <div className="data">
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      )
    }
    
  
      
    )}

<button onClick={ clearList }>Clear List</button>

  </div>
)

}

export default List;