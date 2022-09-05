import React, { useState, useEffect } from "react";
import "../css/home.css";
const Home = () => {
  const [userData, setUserData] = useState({
    name: "",
    line: "Happy to see you again",
  });
  const callAboutPage = async () => {
    const res = await fetch("/getData", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.error === "Error" || !data) {
    } else {
      setUserData({
        ...userData,
        name: data.name,
      });
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div className="home_show text-center d-flex">
        <div className="home_show2"></div>
        <div className="home_content">
          <p>{userData.name === "" ? "Hello Friends!" : userData.name}</p>
          <h1>
            {userData.name === "" ? "I am MERN Developer" : userData.line}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
