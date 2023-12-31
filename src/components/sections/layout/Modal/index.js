import useGlobalContext from "../../../../context/context";
import Button from "../../../primitives/buttons/Button";
import KFCLabel from "../../../primitives/svgs/KFCLabel";
import "./modal.css";

const Modal = () => {
  const { state, closeModal } = useGlobalContext();
  if (!state.modalContent) {
    return (
      <div className={`overlay ${state.isModalOpen ? "appear" : ""}`}>
        <Button
          variant="transparent"
          className="modal-btn"
          onClick={closeModal}
        >
          <i className="fas fa-times"></i>
        </Button>
        <div className="modal"></div>
      </div>
    );
  }

  const content = state.modalContent;

  return (
    <div className={`overlay ${state.isModalOpen ? "appear" : ""}`}>
      <Button variant="transparent" className="modal-btn" onClick={closeModal}>
        <i className="fas fa-times"></i>
      </Button>
      <div className="modal">
        <KFCLabel className="svg" />
        <div className="modal-content">
          <img
            src={`/images/meals/${content.img}.png`}
            alt={content.name}
            className="img"
          />
          <div className="modal-text">
            <h2 className="h3">{content.name}</h2>
            <p>{content.description}</p>
          </div>
          <div className="modal-price h2">
            {content.price} {state.currency}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
