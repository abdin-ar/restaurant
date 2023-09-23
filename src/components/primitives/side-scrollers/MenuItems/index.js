import "./menu-items.css";

const MenuItems = ({ items, card }) => {
  const Card = card;

  return (
    <div className="menu-items">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
export default MenuItems;
