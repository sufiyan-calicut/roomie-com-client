import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log(showMenu, "1");
    setShowMenu(showMenu ? false : true);
    console.log(showMenu, "2");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo ">
        <h1 className="font-bold cursor-default">MISTY LAND</h1>
      </div>
      <div className="navbar-links cursor-default">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/about")}>About</a>
        <a onClick={() => navigate("/contact")}>Contact</a>
        <a onClick={() => navigate("/display-rooms")}>Rooms</a>
      </div>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUser} onClick={toggleMenu} />
        {showMenu && (
          <div className="navbar-menu">
            <a className="dropdown-links" onClick={() => navigate("/")}>
              Home
            </a>
            <a onClick={() => navigate("/about")} className="dropdown-links">
              About
            </a>
            <a onClick={() => navigate("/contact")} className="dropdown-links">
              Contact
            </a>
            <a
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </a>
            <a
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
