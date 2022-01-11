import "./style.scss";
import React from "react";
import Input from "../../components/input";
import { useHistory } from "react-router-dom";

const PostJobs = () => {
  const history = useHistory();

  const routeToJobs = () => {
    history.push("/posted-jobs");
  };
  return (
    <>
      <div className="dark-bg"></div>
      <div className="posts-main">
        <div className="posts-box">
          <div className="text title color-dark">Post a Job</div>
          <Input
            placeholder="Enter job title"
            name="title"
            type="text"
            label="Job Title*"
          />
          <div className="label color-dark">Description*</div>
          <textarea
            rows="4"
            cols="50"
            name="desc"
            className="login-input"
            placeholder="Enter your description"
          ></textarea>
          <Input
            placeholder="Enter location"
            name="location"
            type="text"
            label="Location*"
          />
          <div className="btn">
            <button className="title btn-login" onClick={routeToJobs}>
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJobs;
