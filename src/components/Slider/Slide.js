import React from "react";
import "./styles.scss";

const Slide = ({ image }) => {
  return (
    <img
      className="slide"
      alt="project"
      src={image}
    />
  );
};

export default Slide;
