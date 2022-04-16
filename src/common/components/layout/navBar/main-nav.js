import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/home"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Users
      </NavLink>
      <NavLink
        to="/ideas"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Ideas
      </NavLink>
      <NavLink
        to="/datatable"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Datatable
      </NavLink>
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink>
      <NavLink
        to="/counter"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Counter
      </NavLink>
      <NavLink
        to="/testing"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Testing
      </NavLink>
    </div>
  );
  
  export default MainNav;