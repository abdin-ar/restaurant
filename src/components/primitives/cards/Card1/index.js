import { Link } from "react-router-dom";
import "./card-1.css";

const Card1 = ({ id, name, nameInMenu, img }) => {
  const finalName = nameInMenu || name;
  return (
    <Link to={`/menu?category=${name}`} className="card-1">
      <img
        src={`/images/explore-menu/${img}.png`}
        alt={finalName}
        className="img"
      />
      <h3 className="h2">{finalName}</h3>
    </Link>
  );
};
export default Card1;
