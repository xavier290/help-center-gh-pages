import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "../routes";
import logo from "../pages/images/logo.jpg";

import { useSelector } from "react-redux";
import layout from "../reducers/reducers";

export const SideBar = () => {
  const isNavbarVisible = useSelector(() => layout.navbar);

  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className={!isNavbarVisible ? "active" : ""} id="menu">
      <img src={logo} alt="Builders FirstSource" className="logo" />
      <nav id="sidebar">
        <h1>
          <Link to="/">Builders Docs:</Link>
        </h1>
        <ul className="list-unstyled components">
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
                    className="collapse list-unstyled sublist"
                    id={`pageSubmenu${index}`}
                  >
                    {route.child.map((child, idx) => {
                      return (
                        <li key={idx} className={getNavLinkClass(child.path)}>
                          <NavLink to={child.path} activeClassName="active">
                            {child.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li key={index} className={getNavLinkClass(route.path)}>
                  <Link to={route.path}>{route.navbar}</Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
