import { useSearchParams } from "react-router-dom";
import useGlobalContext from "../../../context/context";
import MenuBar from "../../sections/menu/MenuBar";
import MenuItems from "../../primitives/side-scrollers/MenuItems";
import Card4 from "../../primitives/cards/Card4";
import "./menu.css";

const Menu = () => {
  const { state } = useGlobalContext();
  const params = useSearchParams();
  const query = params[0].get("query");
  const category = params[0].get("category") || state.explore[0].name;
  const view = query
    ? ["query", query]
    : category === "my favorites"
    ? ["my favorites", state.favorites]
    : ["category", category];
  const viewItems = [...state.menu].filter((item) => {
    return view[0] === "my favorites"
      ? view[1].includes(item.id)
      : view[0] === "query"
      ? `${item.name} ${item.description}`
          .toLowerCase()
          .includes(view[1].toLowerCase())
      : item.categories.includes(view[1]);
  });

  return (
    <>
      <MenuBar
        links={state.explore}
        active={view[0] === "favorites" ? "favorites" : category}
        query={query}
      />
      <div className="menu-sections">
        <MenuItems items={viewItems} card={Card4} />
        <img
          src="/images/large/choose.png"
          alt="Choose your meal"
          className="img"
        />
      </div>
    </>
  );
};
export default Menu;
