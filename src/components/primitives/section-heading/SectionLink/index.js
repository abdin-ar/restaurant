import { Link } from "react-router-dom";
import ArrowRightSquare from "../../svgs/ArrowRightSquare";
import "./section-link.css";

const SectionLink = ({ link }) => {
  return (
    <Link to={link} className="h3 section-link">
      <span>View All</span>
      <ArrowRightSquare className="svg" />
    </Link>
  );
};
export default SectionLink;
