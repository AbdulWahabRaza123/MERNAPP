import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Raza from "../images/raza.jpeg";
import "../css/about.css";
const About = () => {
  const History = useNavigate();
  const [userData, setUserData] = useState({});
  const [flag, setFlag] = useState(false);
  const callAboutPage = async () => {
    const res = await fetch("/about", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();

    if (data.error === "Error" || !data) {
      setFlag(false);
      History("/login");
    } else {
      setFlag(true);
      setUserData(data);
      History("/about");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mt-5 emp_profile">
          <form method="">
            <div className="row justify-content-md-center">
              <div className="col-md-2">
                <img
                  className="img-fluid img-thumbnail profile-img"
                  src={Raza}
                  alt="profile"
                />
              </div>
              <div className="col-md-8">
                <div className="profile_head mt-2">
                  <h5>{userData.name}</h5>
                  <h6>{userData.work}</h6>
                  <p className="profile_ranking mt-3 mt-5">
                    Ranking: <span>1/10</span>
                  </p>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#home"
                        data-toggle="tab"
                        role="tab"
                        id="home-tab"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#profile"
                        data-toggle="tab"
                        role="tab"
                        id="profile-tab"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                  <br></br>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="edit-profile-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>Work Link</p>
                <a
                  href="#LinK"
                  className="link-secondary text-decoration-none"
                  target="_raza"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="#LinK"
                  className="link-secondary text-decoration-none"
                  target="_raza"
                >
                  Facebook
                </a>
                <br />
                <a
                  href="#LinK"
                  className="link-secondary text-decoration-none"
                  target="_raza"
                >
                  Linkedin
                </a>
                <br />
                <a
                  href="#LinK"
                  className="link-secondary text-decoration-none"
                  target="_raza"
                >
                  Github
                </a>
                <br />
                <a
                  href="#LinK"
                  className="link-secondary text-decoration-none"
                  target="_raza"
                >
                  Website
                </a>
                <br />
              </div>
              <div className="col-md-8">
                <div
                  className="both-panels tab-content profile-tab"
                  id="myTabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User ID:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p>
                      </div>
                      <div className="col-md-6">
                        <label>Name:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>

                      <div className="col-md-6">
                        <label>Email:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                      <div className="col-md-6">
                        <label>Phone:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                      <div className="col-md-6">
                        <label>Profession:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.work}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Level:</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                      <div className="col-md-6">
                        <label>Hourly Rate:</label>
                      </div>
                      <div className="col-md-6">
                        <p>20$</p>
                      </div>

                      <div className="col-md-6">
                        <label>Total Projects:</label>
                      </div>
                      <div className="col-md-6">
                        <p>10+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <>{History("/login")}</>;
  }
};

export default About;
