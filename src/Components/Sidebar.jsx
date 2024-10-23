import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";
import { BsChatSquareDots } from "react-icons/bs";
import { LiaPagerSolid } from "react-icons/lia";

const home = [
  {
    path: "/",
    name: "Modern",
    icon: <FaCreativeCommonsSamplingPlus />,
  },
  {
    path: "/ecommerce",
    name: "eCommerce",
    icon: <BsCart />,
  },
  {
    path: "/frontendpages",
    name: "Frontend Pages",
    icon: <LiaPagerSolid />,
  }
];

const Apps = [
    {
        path: "/contacts",
        name: "Contacts",
        icon: <BsBoxSeam />,
      },
      {
        path: "/blog",
        name: "Blog",
        icon: <RiBloggerLine />,
      },
      {
        path: "/chats",
        name: "Chats",
        icon: <BsChatSquareDots />,
      }
]

const Sidebar = ({ children,sidemenu }) => {

  return (
    <div className="maindiv d-flex">
      <div className="sidebar" style={{ width: sidemenu?"270px":"100px" }}>
        <div className="logo">
          <img
            src="https://modernize-react.adminmart.com/assets/icon-user-male-ff0c3edd.svg"
            alt=""
          />
          {sidemenu && <h4>Modernize</h4>}
        </div>
        <div className="links">
        <div className="heading">HOME</div>
          {home.map((route, i) => {
            return (
              <NavLink to={route.path} key={i} className="Navlink">
                <div className="d-flex align-items-center gap-4 py-2 px-3 navlinkmain">
                  <div className="icon">{route.icon}</div>
                  {sidemenu && <div className="name mt-1">{route.name}</div>}
                </div>
              </NavLink>
            );
          })}
          <div className="heading">APPS</div>
          {Apps.map((route, i) => {
            return (
              <NavLink to={route.path} key={i} className="Navlink">
                <div className="d-flex align-items-center gap-4 py-2 px-3 navlinkmain">
                  <div className="icon">{route.icon}</div>
                  {sidemenu && <div className="name mt-1">{route.name}</div>}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
