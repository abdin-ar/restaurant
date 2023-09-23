import useGlobalContext from "../../../../context/context";
import HeartFilled from "../../svgs/HeartFilled";
import HeartEmpty from "../../svgs/HeartEmpty";
import "./card-2.css";
import Button from "../../buttons/Button";

const Card2 = ({ id, name, description, price, img }) => {
  const { state, toggleFavorite, openModal, setModalContent } =
    useGlobalContext();
  const isFavorited = state.favorites.includes(id);
  const open = (e) => {
    if (
      e.target.className.baseVal === "svg" ||
      e.target.className.baseVal === "svgp" ||
      e.target.className.baseVal === "like-btn"
    ) {
      return;
    }
    openModal();
    setModalContent({ name, price, description, img });
  };

  return (
    <div className="card-2" onClick={open}>
      <img src={`/images/meals/${img}.png`} alt={name} className="img" />
      <div>
        <h3 className="h3">{name}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </div>
      <div className="price">
        {price} {state.currency}
      </div>
      <Button className="like-btn" onClick={() => toggleFavorite(id)}>
        {isFavorited ? (
          <HeartFilled className="svg" />
        ) : (
          <HeartEmpty className="svg" />
        )}
      </Button>
    </div>
  );
};
export default Card2;
