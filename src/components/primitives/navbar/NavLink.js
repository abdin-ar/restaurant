import React from "react";
import { NavLink as Navlink } from "react-router-dom";
import Button from "../buttons/Button";

/**
 * @type {React.FC<{to?:string,setToggleState?:React.Dispatch<React.SetStateAction<boolean>>} & React.ButtonHTMLAttributes>}
 */
const NavLink = ({
  to,
  title,
  children,
  className,
  setToggleState,
  onClick,
  ...props
}) => {
  return (
    <>
      <Button
        as={Navlink}
        to={to}
        variant="red-bordered"
        title={title}
        className={`nav-link ${className}`}
        onClick={setToggleState ? () => setToggleState(false) : undefined}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default NavLink;
