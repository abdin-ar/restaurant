import "./card-3.css";

const Card3 = ({ img }) => {
  console.log(img);

  return (
    <div className="card-3">
      <img src={`/images/bestsellers/${img}.png`} alt="" className="img" />
    </div>
  );
};
export default Card3;
