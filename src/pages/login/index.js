import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const Login = () => {
  const history = useHistory();

  const routeToForgetPswd = () => {
    history.push("/forget-password");
  };

  const routeToSignup = () => {
    history.push("signup");
  };

  return (
    <>
      <div className="dark-bg" />
      <div className="login-main">
        <div className="login-box">
          <div className="text title color-dark">Login</div>
          <div className="label color-dark">Email Address</div>
          <input
            placeholder="Enter your email"
            name="email"
            type="email"
            className="login-input"
          ></input>

          <div className="label-pswd">
            <div className="label color-dark text-pswd">Password</div>
            <div
              className="label text-forgot text-blue"
              onClick={routeToForgetPswd}
            >
              Forgot your password?
            </div>
          </div>

          <input
            placeholder="Enter your password"
            name="password"
            type="password"
            className="login-input"
          ></input>

          <div className="btn">
            <button className="title btn-login">Login</button>
            <div className="title signup">
              <span className="color-dark">New to MyJobs?</span>
              <span className="text-blue signup-btn" onClick={routeToSignup}>
                {" "}
                Create an account
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;