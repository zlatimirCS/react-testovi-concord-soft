import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  const data = props.data;

  // console.log(props);

  const triggerFuncionInParent = () => {
    props.onTrigger(data.id);
  };
  const excerpt = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="single-tour">
      <img src={data.image} alt={data.name} />
      <footer>
        <div className="tour-info">
          <h4>{data.name}</h4>
          <h4 className="tour-price">${data.price}</h4>
        </div>
        <p>
          {readMore ? data.info : `${data.info.substring(0, 200)}...`}
          <button onClick={excerpt}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={triggerFuncionInParent}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
