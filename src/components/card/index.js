import "./style.scss";
import React from "react";
import locIcon from "../../assets/location.png";
const Card = ({
  title,
  data,
  classes = "",
  location = "",
  applications = [],
}) => {
  return (
    <div className={`card-disp ${classes}`}>
      <div className="title-disp">{title}</div>
      <div className="data-disp color-dark">{data}</div>
      {location?.length > 0 && (
        <div className="jobs-desc">
          <div className="loc-img">
            <img src={locIcon} alt="" className="img" />
            <div>{location}</div>
          </div>
          <div className="btn-appl">
            <button className="btn-appls">View Applications</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
