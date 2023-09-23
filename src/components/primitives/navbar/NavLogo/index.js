import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../svgs/Logo";
import "./nav-logo.css";

/**
 * @type {React.FC}
 */
const NavLogo = () => {
  return (
    <Link to="/" className="nav-logo-link">
      <Logo className="svg nav-logo" />
    </Link>
  );
};
export default NavLogo;
