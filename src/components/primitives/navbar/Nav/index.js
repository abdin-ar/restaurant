import React, { useState } from "react";
import NavLinks from "../NavLinks";
import NavToggle from "../NavToggle";
import "./nav.css";
import NavCTA from "../NavCTA";

/**
 * @type {React.FC<{logo?:React.ReactNode, links?:{[x:string]:any}[], classLink?:string, cta?:React.ReactNode, toggle?:React.ReactNode, classToggle?:string} & React.AllHTMLAttributes>}
 */
const Nav = ({
  className,
  logo,
  links,
  classLink,
  cta,
  toggle,
  classToggle,
  children,
  ...props
}) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleLinks = () => {
    setToggleState((prevState) => !prevState);
  };

  return (
    <>
      <nav className={`nav fixed ${className}`} {...props}>
        <div className="nav-center">
          {toggle ? (
            <NavToggle className={classToggle} toggleLinks={toggleLinks}>
              {toggle}
            </NavToggle>
          ) : null}
          {logo ? logo : null}
          {links ? (
            <NavLinks
              links={links}
              classLink={classLink}
              toggleState={toggleState}
              setToggleState={setToggleState}
            />
          ) : null}
          <NavCTA />
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </>
  );
};

export default Nav;
