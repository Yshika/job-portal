import "./style.scss";
import React, { useEffect, useState } from "react";
import home from "../../assets/homeicon.png";
import notepadIcon from "../../assets/notepad-icon.png";
import { useHistory } from "react-router-dom";
import { jobsData } from "../../shared/posteddata";
import Card from "../../components/card";
import notepad from "../../assets/notepad.png";
// import ReactPaginate from "react-paginate";

const PostedJobs = () => {
  const history = useHistory();
  const [postedJobsData, setPostedJobsData] = useState([]);
  const [appModal, setAppModal] = useState(false);
  const [applicationModal, setApplicationModal] = useState([]);

  const routeToPostJob = () => {
    history.push("/post-a-job");
  };

  useEffect(() => {
    setPostedJobsData(jobsData);
  }, [jobsData]);

  useEffect(() => {
    console.log("valllllll", applicationModal);
  }, [applicationModal]);

  return (
    <>
      <div className="dark-bg dark-bg-posted" />
      <div className="home-posted">
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
                    setApplicationModal={setApplicationModal}
                    setAppModal={setAppModal}
                    classes="job-card"
                    classTitle="job-title"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
      {appModal && (
        <div className="applications">
          <div className="apps-modal">
            <div className="apps-title color-dark">
              Applicants for this job
              <span className="apps-close" onClick={() => setAppModal(false)}>
                X
              </span>
            </div>
            <div className="apps-length">
              Total {applicationModal?.length} applications
            </div>
            <div
              className={
                applicationModal?.length > 0
                  ? "applications-card card-container"
                  : "no-app card-container"
              }
            >
              {applicationModal?.length ? (
                applicationModal.map((val, index) => {
                  return (
                    <>
                      <div key={index} className="avtr-card color-dark">
                        <div className="avtr-name-email">
                          <div className="avtr">{val?.name?.[0]}</div>
                          <div className="name-email">
                            <p>{val?.name}</p>
                            <p>{val?.email}</p>
                          </div>
                        </div>
                        <div className="card-skills">
                          <div className="skills">Skills</div>
                          <div>{val?.skills}</div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="no-img">
                    <img src={notepad} alt="Nothing" className="img" />
                  </div>
                  <p>No applications available!</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostedJobs;
