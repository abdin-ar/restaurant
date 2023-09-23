import React from "react";
import Nav from "../../../primitives/navbar/Nav";
import navLinks from "../../../../data/navLinks";
import NavLogo from "../../../primitives/navbar/NavLogo";
import NavCTA from "../../../primitives/navbar/NavCTA";
import BurgerMenu from "../../../primitives/svgs/BurgerMenu";
import "./navbar.css";

/**
 * @type {React.FC}
 */
const Navbar = () => {
  return (
    <Nav
      logo={<NavLogo />}
      links={navLinks}
      classLink="h3"
      cta={<NavCTA />}
      toggle={<BurgerMenu className="svg" />}
      classToggle="toggle-btn"
    ></Nav>
  );
};

export default Navbar;
