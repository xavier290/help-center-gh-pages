import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "../routes";

import logo2 from "../pages/images/logo2.png";

import Nav from "react-bootstrap/Nav";

function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  return (
    <header>
      <Link
        onClick={toggle}
        onBlur={hide}
        onFocus={show}
        to="/"
        className="logo"
      >
        <img src={logo2} alt="builders first source logo" />
      </Link>
      <div className="menu-btn" onClick={toggle}>
        <div className="menu-btn-burguer"></div>
        <span className={`menu ${isOpen ? "cross" : "hamburger"}`}></span>
      </div>

      <div className={`menu ${isOpen ? "show" : ""}`}>
        <Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
          <ul>
            {routes
              .filter((route) => route.navbar !== "")
              .map((route, index) => {
                //If has child, render sub list
                return route.child ? (
                  <li key={index}>
                    <a
                      href={`#pageSubmenu${index}`}
                      data-toggle="collapse"
                      aria-expanded="false"
                      className="dropdown-toggle"
                    >
                      {route.navbar}
                    </a>
                    <ul
                      className="collapse list-unstyled sublist show"
                      id={`pageSubmenu${index}`}
                    >
                      {route.child.map((child, idx) => {
                        return (
                          <li key={idx} className={getNavLinkClass(child.path)}>
                            <NavLink
                              onClick={toggle}
                              onBlur={hide}
                              onFocus={show}
                              to={child.path}
                              activeClassName="active"
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={index} className={getNavLinkClass(route.path)}>
                    <Link
                      onClick={toggle}
                      onBlur={hide}
                      onFocus={show}
                      to={route.path}
                    >
                      {route.navbar}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </Nav>
      </div>
    </header>
  );
}

export default Header;
