import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const ForgetPswd = () => {
  const history = useHistory();

  const routeToReset = () => {
    history.push("/reset-password");
  };
  return (
    <>
      <div className="dark-bg"></div>
      <div className="frgt-pswd-main">
        <div className="frgt-pswd-box">
          <div className="text title color-dark">Forgot your password?</div>
          <div className="label">
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </div>
          <div className="label color-dark">Email Address</div>
          <input
            placeholder="Enter your email"
            name="email"
            type="email"
            className="login-input"
          ></input>
          <div className="btn">
            <button className="title btn-login" onClick={routeToReset}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPswd;
