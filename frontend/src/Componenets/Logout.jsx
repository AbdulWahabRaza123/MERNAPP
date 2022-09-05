import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const History = useNavigate();
  const logoutFun = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log("This is logout ", data);
      if (data.message === "Done" || data) {
        dispatch({ type: "USER", payload: false });
        History("/login");
      } else {
        window.alert("Error in Logout");
      }
    } catch (e) {
      window.alert("Error");
    }
  };
  useEffect(() => {
    logoutFun();
  });
  return <></>;
};
export default Logout;
