import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "./Navbar.css";
import { Calendar } from "react-calendar";
import MyCalendar from "./Calender";
import { setViewCalender } from "../../../../reduxToolkit/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import RoomSelection from "./RoomSelection";

const Navbar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  console.log(search.checkInDate, "checkindateeeee");
  console.log(search, "search date");
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openRoomDiv, setOpenRoomDiv] = useState(false);

  console.log(value, "date");
  const handleDate = (value) => {
    console.log(value, "new");
  };

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
      <div className="navbar-links cursor-default  ">
        <div className="border  md:h-9 md:w-48 ">
          <input
            placeholder="Search by city, hotel, or neighborhood"
            type="text"
          />
        </div>
        <div className="border  md:h-9 md:w-48 p-2">
          <div
            className="flex absolute w-full"
            onClick={() => setOpenCalendar(true)}
            onMouseLeave={() => setOpenCalendar(false)}
          >
            {/* { search ? search.checkInDate : "Date"} */}
            date
            {openCalendar && <MyCalendar />}
          </div>
        </div>

        <div className="border  md:h-9 md:w-48">
          {openRoomDiv && <RoomSelection />}
        </div>

        {/* <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/display-rooms")}>Rooms</a>
        <a onClick={() => navigate("/about")}>About</a>
        <a onClick={() => navigate("/contact")}>Contact</a> */}
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
