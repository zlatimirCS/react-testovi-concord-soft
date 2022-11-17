import React from "react";
import loadGif from "../loader.gif";

const Loading = () => {
  return <img src={loadGif} className="loader" alt="Loading..." />;
};

export default Loading;
