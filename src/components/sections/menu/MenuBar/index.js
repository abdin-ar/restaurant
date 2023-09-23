import { Link, createSearchParams } from "react-router-dom";
import Button from "../../../primitives/buttons/Button";
import "./menu-bar.css";
import Search from "../../../primitives/other/Search";

const MenuBar = ({ links, active, query }) => {
  return (
    <div className="menu-bar">
      <div className="menu-links">
        {links.map((link) => {
          const category = createSearchParams({
            category: link.name,
          }).toString();
          return (
            <Button
              key={link.id}
              as={Link}
              to={`/menu?${category}`}
              className={query ? "" : link.name === active ? "active h3" : "h3"}
              variant="red-text"
            >
              {link.name}
            </Button>
          );
        })}
      </div>
      <Search query={query} className={query ? "active" : ""} />
    </div>
  );
};
export default MenuBar;
