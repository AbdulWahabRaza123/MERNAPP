import React from "react";
import { NavLink } from "react-router-dom";
import "../css/error.css";
const ErrorPage = () => {
  return (
    <>
      <div className="not_Found">
        <div className="text-center error_style">
          <h1>404 Error</h1>
          <p>The Page which you are looking for might be removed or changed.</p>
          <p>Click the button below to go back.</p>
          <NavLink to="/">Go Back</NavLink>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
