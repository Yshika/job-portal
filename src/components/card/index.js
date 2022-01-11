import "./style.scss";
import React from "react";
import locIcon from "../../assets/location.png";
const Card = ({
  title,
  data,
  classes = "",
  classTitle = "",
  location = "",
  applications = [],
  setApplicationModal = () => {},
  setAppModal = () => {},
}) => {
  const handleModal = (data) => {
    setAppModal(true);
    setApplicationModal(data);
  };

  return (
    <>
      <div className={`card-disp ${classes}`}>
        <div className={`title-disp ${classTitle}`}>{title}</div>
        <div className="data-disp color-dark">{data}</div>
        {location?.length > 0 && (
          <div className="jobs-desc">
            <div className="loc">
              <div className="loc-img">
                <img src={locIcon} alt="" className="img" />
              </div>
              <div className="loc-name">{location}</div>
            </div>
            <div className="btn-appl">
              <button
                className="btn-appls"
                onClick={() => handleModal(applications)}
              >
                View Applications
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
