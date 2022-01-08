import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <header className="header">
      <div className="section">
        <div className="title col">
          <span className="text-white">My</span>
          <span className="text-blue">Jobs</span>
        </div>
        <div className="btn col">
          <button className="btn-login" onClick={handleClick}>
            Login/Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
