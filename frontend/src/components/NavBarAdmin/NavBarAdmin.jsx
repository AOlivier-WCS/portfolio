import React, { useState } from "react";
import "./NavBarAdmin.css";
import { Link } from "react-router-dom";
import logo from "../../assets/carbon_user-filled.png";
import Logout from "../Logout/Logout";

export default function NavBarAdmin() {
  const [activeMembre, setActiveMembre] = useState(true);
  const [activeSite, setActiveSite] = useState(false);
  return (
    <div className="navBar-All">
      <nav responsive="true" id="navbar-admin" className="navbar-admin">
        <div className="navabar-welcome-logo">
          <p id="navbar-welcome" className="text-navbar-admin">
            Welcome !
          </p>
          <img id="navbar-logo" src={logo} alt="logo" />
        </div>
        <Link
          id={activeMembre ? "navbar-link-membre-select" : "navbar-link-membre"}
          className="link-edition-member"
          to="/admin/users"
          onClick={() => setActiveMembre(!activeMembre)}
        >
          Edition projet
        </Link>
        <Link
          id={activeSite ? "navbar-link-site-select" : "navbar-link-site"}
          className="link-edition-site"
          to="/admin/website"
          onClick={() => setActiveSite(!activeSite)}
        >
          Edition expérience
        </Link>
        <Link
          id="navbar-link-Website"
          className="link-website"
          target="_blank"
          to="/home"
        >
          voir le site
        </Link>
        <Logout
          classLogout="link-logout"
          idLogout="navbar-link-logout"
          logout="/admin/loginadmin"
          redirect="/admin"
        />
      </nav>
    </div>
  );
}
