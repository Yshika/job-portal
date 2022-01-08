import React from "react";
import "./style.scss";
import img from "../../assets/img-girl.jpeg";

const Home = () => {
  return (
    <>
      <div className="home">
        <section className="caption-head">
          <div className="text-white">Welcome to</div>
          <div className="title">
            <span className="text-white">My</span>
            <span className="text-blue">Jobs</span>
          </div>
          <div className="btn">
            <button className="btn-start">Get Started</button>
          </div>
        </section>
        <section className="img-block">
          <img src={img} className="img" />
        </section>
      </div>
      <section className="whyus">WHYUS</section>
    </>
  );
};

export default Home;
