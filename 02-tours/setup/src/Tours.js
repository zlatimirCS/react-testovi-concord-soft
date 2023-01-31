import React, { useState, useEffect, useContext } from 'react';
import Tour from './Tour';

import { ToursContext } from './App';

const Tours = (props) => {
  const {tours, setTours} = useContext(ToursContext);

  const onNotInterested = (id) => {
    let newArray = [];
    tours.forEach(t => {
      if(t.id != id) {
        newArray.push(t)
      }
    });

    setTours(newArray)

  }

  return (
    <div className="tours">
      {tours.map(t => <Tour key={t.id} tour={t} onNotInterested={onNotInterested}/>)}
    </div>
  )
};

export default Tours;
