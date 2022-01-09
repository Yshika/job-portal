import "./style.scss";
import React, { useEffect, useState } from "react";
import home from "../../assets/homeicon.png";
import notepadIcon from "../../assets/notepad-icon.png";
import { useHistory } from "react-router-dom";
import { jobsData } from "../../shared/posteddata";
import Card from "../../components/card";

const PostedJobs = () => {
  const history = useHistory();
  const [postedJobsData, setPostedJobsData] = useState([]);
  const routeToPostJob = () => {
    history.push("/post-a-job");
  };

  useEffect(() => {
    setPostedJobsData(jobsData);
  }, [jobsData]);

  return (
    <>
      <div className="dark-bg" />
      <div className="home">
        <div className="breadcrumb">
          <span className="icon">
            <img src={home} className="img" alt="home"></img>
          </span>
          <span className="text-white home-icon">Home</span>
        </div>
        <div className="text-white home-page">Jobs posted by you</div>

        {postedJobsData?.length == 0 ? (
          <div className="job-apps">
            <img src={notepadIcon} alt="notepad" className="notepad-img" />
            <div className="color-dark no-jobs">
              Your posted jobs will show here!
            </div>
            <div className="btn">
              <button className="title btn-login" onClick={routeToPostJob}>
                Post a Job
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="card-block">
              {postedJobsData?.map((val, index) => {
                return (
                  <Card
                    key={index}
                    title={val?.title}
                    data={val?.jd}
                    location={val?.location}
                    applications={val?.applications}
                    classes="job-card"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PostedJobs;
