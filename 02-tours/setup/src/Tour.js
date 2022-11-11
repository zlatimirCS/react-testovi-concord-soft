import { useState } from "react";

const Tour = ({ name, price, info, image }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <p>{info}</p>
      <button> {isReadMore ? "Show Less" : "Read More"} </button>
      <img src={image} alt="/" />
      <button>Not interested</button>
    </li>
  );
};

export default Tour;
