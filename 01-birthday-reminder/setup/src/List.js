import React, { useEffect, useState } from 'react';
import list from './list.css';

const List = ({ persons }) => {
  console.log(persons);

  return (
    <ul>
      <PersonComp persons={persons} />
    </ul>
  );
};

const PersonComp = ({ persons }) => {
  return persons.map((person) => {
    const { id, name, age, image } = person;
    return (
      <li key={id}>
        <img src={image} alt={name} />
        <div className='about'>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </li>
    );
  });
};
export default List;
