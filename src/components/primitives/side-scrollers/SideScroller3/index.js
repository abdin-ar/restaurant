import "./side-scroller-3.css";

const SideScroller3 = ({ items, card }) => {
  const Card = card;
  return (
    <div className="side-scroller-3">
      <div className="media-scroller-3 snaps-inline">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default SideScroller3;
