import largeCards from "../../../../data/largeCards";
import "./large-cards.css";

const LargeCards = () => {
  return (
    <div className="large-cards">
      {largeCards.map((card) => {
        return (
          <img
            key={card.id}
            src={`/images/large/${card.img}.png`}
            alt="Large Card"
            className="img"
          />
        );
      })}
    </div>
  );
};
export default LargeCards;
