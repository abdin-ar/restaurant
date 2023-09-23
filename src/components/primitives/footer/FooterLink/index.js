import { Link } from "react-router-dom";
import "./footer-link.css";

const FooterLink = ({ to, name, className, ...props }) => {
  return (
    <Link to={to} className={`footer-link ${className}`} {...props}>
      {name}
    </Link>
  );
};
export default FooterLink;
