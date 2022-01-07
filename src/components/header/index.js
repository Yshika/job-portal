import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="section">
        <div className="title col">
          <span className="text-white">My</span>
          <span className="text-blue">Jobs</span>
        </div>
        <div className="btn col">
          <button className="btn-login">Login/Signup</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
