import React, { useContext } from "react";
import logo from "../img/logo.svg";
import { AppContext } from "../MyAllStates";
const Header = () => {
  // const data = useContext(AppContext);
  // console.log(data.state2);

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
