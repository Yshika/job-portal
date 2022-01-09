import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import "./style.scss";

const Login = ({ isLogedIn, setIsLogedIn }) => {
  const history = useHistory();

  const routeToForgetPswd = () => {
    history.push("/forget-password");
  };

  const routeToSignup = () => {
    history.push("signup");
  };

  const routeToPosts = () => {
    setIsLogedIn(true);
    history.push("/posted-jobs");
  };

  return (
    <>
      <div className="dark-bg dark-bg-login" />
      <div className="login-main">
        <div className="login-box">
          <div className="text title color-dark">Login</div>
          <Input
            placeholder="Enter your email"
            name="email"
            type="email"
            label="Email Address"
          />
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
            <button className="title btn-login" onClick={routeToPosts}>
              Login
            </button>
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
