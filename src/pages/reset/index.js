import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import "./style.scss";

const Reset = () => {
  const history = useHistory();

  const routeToLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <div className="dark-bg"></div>
      <div className="reset-main">
        <div className="reset-box">
          <div className="text title color-dark">Reset Your Password</div>
          <div className="label">Enter your new password below.</div>
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
            label="New Password"
          />

          <Input
            placeholder="Enter your password"
            name="confirmPassword"
            type="password"
            label="Confirm New Password"
          />

          <div className="btn">
            <button className="title btn-login" onClick={routeToLogin}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
