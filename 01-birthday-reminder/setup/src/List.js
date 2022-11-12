import React from "react";

const List = ({ people }) => {
  return (
    <div className="list">
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <div>
                <img src={person.image} alt={person.name} />
              </div>
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
