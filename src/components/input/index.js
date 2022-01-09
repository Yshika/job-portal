import "./style.scss";
import React from "react";

const Input = ({
  label = "",
  placeholder = "",
  labelName = "",
  type = "text",
}) => {
  return (
    <>
      <div className="label color-dark">{label}</div>
      <input
        placeholder={placeholder}
        name={labelName}
        type={type}
        className="login-input"
      />
    </>
  );
};

export default Input;
