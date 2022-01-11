import React from "react";
import "./style.scss";
import img from "../../assets/img-girl.jpeg";
import Card from "../../components/card";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import { useHistory } from "react-router-dom";
import Logo from "../../components/logo";

const Home = () => {
  const history = useHistory();
  const routeToSignup = () => {
    history.push("signup");
  };

  return (
    <>
      <div className="dark-bg dark-bg-home" />

      <div className="home">
        <section className="caption-head">
          <div className="text-white">Welcome to</div>
          <div className="title">
            <span className="text-white">Our</span>
            <span className="text-blue">Jobs</span>
          </div>
          <div className="btn">
            <button className="btn-start" onClick={routeToSignup}>
              Get Started
            </button>
          </div>
        </section>
        <section className="img-block">
          <img alt="img" src={img} className="img" />
        </section>
      </div>
      <section className="why-us">
        <div className="title-head color-dark">Why Us</div>
        <div className="card-block">
          <Card
            title="Get More Visibility"
            classes="card-margin"
            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Card
            title="Organize your candidates"
            classes="card-margin"
            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            title="Verify their abilities"
            classes="card-margin"
            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </div>
      </section>
      <section className="companies">
        <div className="title-comp color-dark">companies who trust us</div>
        <div className="logo">
          <Logo logo={logo} />
          <Logo logo={logo1} />
          <Logo logo={logo} />
          <Logo logo={logo1} />
          <Logo logo={logo} />
          <Logo logo={logo1} />
          <Logo logo={logo} />
          <Logo logo={logo1} />
          <Logo logo={logo} />
          {/* <div className="logo-block">
            <img alt="img" src={logo} className="logo-img" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
