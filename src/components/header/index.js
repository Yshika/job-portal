import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const Header = ({ isLogedIn, setIsLogedIn }) => {
  const history = useHistory();

  const [modalLogin, setModalLogin] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState(false);

  const handleClick = () => {
    history.push("/login");
  };

  const routeToHome = () => {
    history.push("/");
  };

  const routeToPosts = () => {
    history.push("/post-a-job");
  };
  const handleLogout = () => {
    setIsLogedIn(false);
    setModalLogin(false);
    history.push("/");
    setLogoutMsg(true);
  };

  return (
    <header className="header">
      <div className="section">
        <div className="title col" onClick={routeToHome}>
          <span className="text-white">Our</span>
          <span className="text-blue">Jobs</span>
        </div>
        {!isLogedIn ? (
          <div className="btn col">
            <button className="btn-login" onClick={handleClick}>
              Login/Signup
            </button>
            {logoutMsg && (
              <div className="logout">
                <div className="logout-title text-blue">Logout</div>
                <div
                  className="logout-close"
                  onClick={() => {
                    setLogoutMsg(false);
                  }}
                >
                  x
                </div>
                <div className="logout-msg">
                  You have successfully logged out.
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="col logged-in">
            <div className="text-white" onClick={routeToPosts}>
              Post a Job
            </div>
            <div className="color-light avatar">R</div>
            <div
              className="triangle"
              onClick={() => setModalLogin(!modalLogin)}
            />
            {modalLogin && (
              <div className="modal-login" onClick={handleLogout}>
                Logout
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
