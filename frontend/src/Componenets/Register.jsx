import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/registeration.css";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import KeyIcon from "@mui/icons-material/Key";
import RegisterImg from "../images/registration.jpg";
import { useState } from "react";
const Register = () => {
  const History = useNavigate();
  const [pShow, setPShow] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });

  const changePState = () => {
    if (pShow === true) {
      setPShow(false);
    } else {
      setPShow(true);
    }
  };

  const inputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, phone, work, password, cPassword } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cPassword,
      }),
    });
    const data = await res.json();
    if (data.error === "Error" || !data) {
      window.alert("Registration Error");
      console.log("Error Found");
    } else {
      window.alert("Registration successful");
      History("/login");
    }
  };
  return (
    <>
      <div className="container container-fluid mt-3 form_registration row">
        <h1 className="text-center">Registration</h1>
        <br />
        <br />
        <form
          method="POST"
          className="col-7 container container-fluid form_register"
        >
          <div className="form_name">
            <PersonIcon />
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Name"
              value={user.name}
              onChange={inputHandle}
              required
            />
          </div>
          <div className="form_email">
            <EmailIcon />
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={user.email}
              onChange={inputHandle}
              required
            />
          </div>
          <div className="form_phone">
            <LocalPhoneIcon />
            <input
              type="text"
              name="phone"
              autoComplete="off"
              placeholder="Phone"
              value={user.phone}
              onChange={inputHandle}
              required
            />
          </div>
          <div className="form_profession">
            <AssuredWorkloadIcon />
            <input
              type="text"
              name="work"
              autoComplete="off"
              placeholder="Profession"
              value={user.work}
              onChange={inputHandle}
              required
            />
          </div>
          <div className="form_password">
            <KeyIcon />
            <input
              type={pShow ? "text" : "password"}
              name="password"
              autoComplete="off"
              placeholder="Password"
              value={user.password}
              onChange={inputHandle}
              required
            />
            <input
              type="checkbox"
              className="show_password"
              onClick={changePState}
            />
            Show?
          </div>
          <div className="form_cPassword">
            <KeyIcon />
            <input
              type={pShow ? "text" : "password"}
              name="cPassword"
              autoComplete="off"
              placeholder="Confirm Password"
              value={user.cPassword}
              onChange={inputHandle}
              required
            />
          </div>
          <input
            type="submit"
            onClick={PostData}
            className="btn btn-primary button_click"
            value="Register"
          />
        </form>
        <div className="image container container-fluid col-5">
          <img
            className="img-responsive"
            src={RegisterImg}
            alt="Registration"
          />
          <div className="mb-4 text-center margin_set_top">
            <NavLink to="/login" exact activeClassName="active">
              <b>Already Registered?</b>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
