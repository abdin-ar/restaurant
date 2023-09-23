import React from "react";
import "./footer-social-link.css";

/**
 * @type {React.FC<React.AnchorHTMLAttributes & {icon?:string,title?:string,type?:'Link'|'NavLink'|'a'}>}
 */
const FooterSocialLink = ({ icon, title, href, className, ...props }) => {
  return (
    <a
      className={`footer-social-link ${className}`}
      href={href}
      title={title}
      {...props}
    >
      <i className={icon}></i>
    </a>
  );
};
export default FooterSocialLink;
