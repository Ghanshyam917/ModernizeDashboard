import React from "react";
import "../css/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Navbar = (props) => {
  return (
    <>
      <div className="navigation">
        <div className="left">
          <RxHamburgerMenu  onClick={props.toggleSidebar}/>
          <IoSearchOutline />
          <div className="navlinks">
            <NavLink to="/apps"> Apps</NavLink>
            <NavLink to="/chat"> Chat</NavLink>
            <NavLink to="/calender"> Calender</NavLink>
            <NavLink to="/email"> Email</NavLink>
          </div>
        </div>
        <div className="right">
          <NavLink>
            <img
              src="https://modernize-react.adminmart.com/assets/icon-flag-en-20a62c34.svg"
              alt=""
            />
          </NavLink>
          <NavLink>
            <BsCart />
          </NavLink>
          <NavLink>
            <IoMoonOutline />
          </NavLink>
          <NavLink>
            <MdOutlineNotificationsActive />
          </NavLink>
          <NavLink>
            <img
              className="profileimg"
              src="https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg"
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
