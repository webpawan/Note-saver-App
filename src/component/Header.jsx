import { motion } from "framer-motion";
import React, { useContext } from "react";
import logo from "../img/logo.svg";
import { AppContext } from "../MyAllStates";

const Header = () => {

const {setQuery} = useContext(AppContext); 
  return (
    <>
      <motion.header className="header" initial={{opacity:0 ,y : '-10vw' } } animate={{opacity:1,y:'0vh',   }} transition={{ bounce:.25 ,type:'spring' }}>
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <form className="d-flex mx-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={e=>setQuery(e.target.value)}
                />
              </form>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
