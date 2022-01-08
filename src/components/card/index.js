import "./style.scss";
import React from "react";

const Card = ({ title, data }) => {
  return (
    <div className="card-disp">
      <div className="title-disp">{title}</div>
      <div className="data-disp color-dark">{data}</div>
    </div>
  );
};

export default Card;
