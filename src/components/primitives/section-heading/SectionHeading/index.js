import SectionLink from "../SectionLink";
import SectionTitle from "../SectionTitle";
import "./section-heading.css";

const SectionHeading = ({ title, icon, link }) => {
  return (
    <div className="section-heading">
      {title ? <SectionTitle title={title} icon={icon} /> : null}
      {link ? <SectionLink link={link} /> : null}
    </div>
  );
};
export default SectionHeading;
