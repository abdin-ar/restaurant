import FooterLink from "../FooterLink";
import "./footer-links.css";

const FooterLinks = ({ links }) => {
  return (
    <div className="footer-links">
      {links.map((link) => {
        return <FooterLink key={link.id} {...link} />;
      })}
    </div>
  );
};
export default FooterLinks;
