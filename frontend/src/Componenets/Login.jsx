import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "../css/login.css";
import EmailIcon from "@material-ui/icons/Email";
import KeyIcon from "@mui/icons-material/Key";
const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const [pShow, setPShow] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const History = useNavigate();
  const changePState = () => {
    if (pShow === true) {
      setPShow(false);
    } else {
      setPShow(true);
    }
  };
  const loginInputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin({ ...login, [name]: value });
  };
  const PostDataLogin = async (event) => {
    event.preventDefault();
    console.log(login);
    const { email, password } = login;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log("Data is here ", data);
    if (data.error === "Error" || !data) {
      window.alert("Invalid Error Found");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      History("/");
    }
  };
  return (
    <>
      <div className="container container-fluid">
        <h1 className="text-center mt-5">Login</h1>
        <div className="container container-fluid form_style text-center mt-5">
          <form className="form_login" method="POST">
            <div className="email_login form-group">
              <EmailIcon />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={loginInputHandle}
                autoComplete="false"
                required="true"
              />
            </div>
            <div className="password_login form-group">
              <KeyIcon />
              <input
                type={pShow ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={loginInputHandle}
                required="true"
              />
              <br />
              <div className="d-flex justify-content-start p_login_container">
                <input
                  type="checkbox"
                  className="show_password_login"
                  onClick={changePState}
                />
                Show?
              </div>
            </div>
            <input
              type="submit"
              onClick={PostDataLogin}
              className="btn btn-primary mt-5 mb-4"
              value="Login"
            />
          </form>
          <div className="mb-1">
            <NavLink to="/register" exact activeClassName="active">
              <b>Register?</b>
            </NavLink>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Login;
