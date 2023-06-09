import React from "react";
import "./button.css";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="btn" type="button">
      {text}
    </button>
  );
};

export default Button;
