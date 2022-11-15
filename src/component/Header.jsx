import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import logo from "../img/logo.svg";
import { AppContext } from "../MyAllStates";

const Header = () => {
  const { setQuery } = useContext(AppContext);
  return (
    <>
      <motion.header
        className="header"
        initial={{ opacity: 0, y: "-10vw" }}
        animate={{ opacity: 1, y: "0vh" }}
        transition={{ bounce: 0.25, type: "spring" }}
      >
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand img-fluid" href="/">
              <img src={logo} style={{ height: "40px" }} alt="bhai" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="">
              <i className="fa-solid fa-magnifying-glass"></i>

              </span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
             
                <div className="mx-auto">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search in small letter "
                  onChange={(e) => setQuery(e.target.value)}
                />
                </div>
            
            </div>
          </div>
        </nav>
      </motion.header>
      <ToastContainer />
    </>
  );
};

export default Header;
