import React from "react";
import "./footer.css";

/**
 * @type {React.FC<React.AllHTMLAttributes>}
 */
const Footer = ({ className, children, ...props }) => {
  return (
    <footer className={`footer ${className}`} {...props}>
      <div className="footer-center">{children}</div>
    </footer>
  );
};
export default Footer;
