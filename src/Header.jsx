import React from "react";
// import Logo from '../src/img.logo.svg';
import logo from "../src/img/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
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
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
