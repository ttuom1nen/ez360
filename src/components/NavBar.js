import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Bootstrap logo"
        />
      </a>
    </nav>
  );
};

export default NavBar;
