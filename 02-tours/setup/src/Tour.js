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
      <div className="description">
        <div className="tour-title-price">
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p className="info">
          <span>{isReadMore ? truncatedInfo : info}</span>
          <button onClick={readMoreHandler}>
            {isReadMore ? "Read More" : "Show Less"}
          </button>
        </p>
        <button onClick={notInterestedHandler} className="delete-btn">
          Not interested
        </button>
      </div>
    </li>
  );
};

export default Tour;
