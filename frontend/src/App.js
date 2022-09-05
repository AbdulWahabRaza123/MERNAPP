import React, { createContext } from "react";
import Navbar from "./Componenets/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Componenets/Home";
import About from "../src/Componenets/About";
import Contact from "../src/Componenets/Contact";
import Login from "../src/Componenets/Login";
import Register from "../src/Componenets/Register";
import ErrorPage from "../src/Componenets/ErrorPage";
import Logout from "../src/Componenets/Logout";
import { useReducer } from "react";
import { initialState, reducer } from "../src/Componenets/reducer/UserReducer";
const UserContext = createContext();
const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />

        <Routing />
      </UserContext.Provider>
    </>
  );
};
export { UserContext };
export default App;
