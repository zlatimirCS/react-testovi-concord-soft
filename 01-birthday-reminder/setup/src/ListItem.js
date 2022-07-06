import React from "react";
import data from "./data";

export default function ListItem(props) {
  console.log(props, "testing");
  return (
    <article className="person" id={props?.id}>
    
      <img src={props?.image} alt={props?.name} />
      <div>
        <h4>{props?.name}</h4>
        <p>{props?.age} years</p>
      </div>
    </article>
  );
}


