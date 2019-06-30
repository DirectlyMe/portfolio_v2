import React from "react";

// used for technology tags in app feature list
const Tag = ({ color, text }) => (
  <li
    style={{
      width: "15px",
      backgroundColor: `#${color}`,
      boxSizing: "border-box",
      fontSize: "14px",
      fontWeight: "500",
      display: "inline",
      borderRadius: "15px",
      padding: "1em",
      margin: ".5em",
      boxShadow: "2px 2px 3px rgba(0,0,0,.5)"
    }}
  >
    {text}
  </li>
);

export default Tag;
