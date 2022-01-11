import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const SignUp = () => {
  const history = useHistory();

  const routeToLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <div className="dark-bg"></div>
      <div className="signup-main">
        <div className="signup-box">
          <div className="text title color-dark">Signup</div>
          <div className="label">I'm a*</div>
          <div className="btn btn-margin">
            <button className="title btn-login">Recruiter</button>
            <button className="title btn-login btn-candidate" disabled>
              Candidate
            </button>
          </div>
          <div className="label color-dark">Full Name</div>
          <input
            placeholder="Enter your full name"
            name="name"
            type="text"
            className="login-input"
          ></input>
          <div className="label color-dark">Email Address</div>
          <input
            placeholder="Enter your email"
            name="email"
            type="email"
            className="login-input"
          ></input>
          <div className="pswd-block">
            <div className="pswd-width">
              <div className="label color-dark">Create Password</div>
              <input
                placeholder="Enter your password"
                name="pswd"
                type="password"
                className="login-input"
              ></input>
            </div>
            <div className="pswd-width">
              <div className="label color-dark">Confirm Password</div>
              <input
                placeholder="Enter your password"
                name="repswd"
                type="password"
                className="login-input"
              ></input>
            </div>
          </div>
          <div className="label color-dark">Skills</div>
          <input
            placeholder="Enter comma separated skills"
            name="skills"
            type="text"
            className="login-input"
          ></input>
          <div className="btn text-center">
            <button className="title btn-login" onClick={routeToLogin}>
              Signup
            </button>
          </div>
          <div className="title signup">
            <span className="color-dark">Have an account?</span>
            <span className="text-blue signup-btn" onClick={routeToLogin}>
              {" "}
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
