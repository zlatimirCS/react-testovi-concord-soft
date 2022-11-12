import { useState } from "react";

const Tour = ({ tour, deleteTour }) => {
  const { id, name, price, info, image } = tour;
  const [isReadMore, setIsReadMore] = useState(true);
  const truncatedInfo = info.slice(0, 200) + "...";
  const notInterestedHandler = () => {
    deleteTour(id);
  };
  const readMoreHandler = () => {
    setIsReadMore((prev) => !prev);
  };
  return (
    <li className="tour">
      <img src={image} alt="/" />
      <p>{name}</p>
      <p>${price}</p>
      <p className="info">
        <span>{isReadMore ? truncatedInfo : info}</span>
        <button onClick={readMoreHandler}>
          {isReadMore ? "Read More" : "Show Less"}
        </button>
      </p>
      <button onClick={notInterestedHandler}>Not interested</button>
    </li>
  );
};

export default Tour;
