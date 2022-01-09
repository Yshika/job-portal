import "./style.scss";

import React from "react";

const Logo = ({ logo }) => {
  return (
    <>
      <div className="logo-block">
        <img alt="img" src={logo} className="logo-img" />
      </div>
    </>
  );
};

export default Logo;
