import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/contact.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AddHomeIcon from "@mui/icons-material/AddHome";
import EmailIcon from "@material-ui/icons/Email";
const Contact = () => {
  const History = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const inputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
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
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  const contactForm = async (event) => {
    event.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (data.message === "Error") {
      window.alert("Message not send");
    } else {
      window.alert("Message Sended");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div className="mx-auto container container-fluid">
        <div className="contact_info_items mt-4 justify-content-between">
          {/* phone */}
          <div className="contact_info_item d-flex justify-content-start align-items-center">
            <PhoneIphoneIcon />
            <div className="phone_details">
              <div className="contact_info_title">
                <b>Phone No:</b>
              </div>
              <div className="contact_info_content">
                <b>03117851141</b>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="contact_info_item d-flex justify-content-start align-items-center">
            &nbsp;
            <EmailIcon />
            <div className="phone_details">
              <div className="contact_info_title">
                <b>Email:</b>
              </div>
              <div className="contact_info_content">
                <b>abdulwahabraza123@gmail.com</b>
              </div>
            </div>
          </div>
          {/* Address */}
          <div className="contact_info_item d-flex justify-content-start align-items-center">
            &nbsp;
            <AddHomeIcon />
            <div className="phone_details">
              <div className="contact_info_title">
                <b>Address</b>
              </div>
              <div className="contact_info_content">
                <b>Gujranwala, Pakistan</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us form */}
      <div className="container container-fluid mt-5 mx-auto set_style_contact">
        <div className="contact_us_form">
          <h1 className="mb-4">&nbsp;Get in Touch!</h1>
          <form className="form_contact" method="POST">
            <div className="set_contact_form justify-content-between container">
              <input
                className="form-control"
                value={userData.name}
                name="name"
                onChange={inputHandle}
                type="text"
                placeholder="Name"
                required="true"
              />
              &nbsp;&nbsp;
              <input
                className="form-control"
                value={userData.email}
                name="email"
                onChange={inputHandle}
                type="email"
                placeholder="Email"
                required="true"
              />
              &nbsp;&nbsp;
              <input
                className="form-control"
                value={userData.phone}
                name="phone"
                onChange={inputHandle}
                type="text"
                placeholder="Phone No"
                required="true"
              />
            </div>
            <div className="container mt-3 set_margin_textarea text-center">
              <textarea
                className="form-control"
                rows="7"
                name="message"
                placeholder="Description"
                onChange={inputHandle}
                value={userData.message}
                required="true"
              />
            </div>
            <div className="set_contact_submit_btn">
              <input
                type="submit"
                onClick={contactForm}
                className="btn btn-primary"
                value="Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
