import "./section-title.css";

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="section-title">
      <h2 className="h2">{title}</h2>
      {icon ? (
        <img src={`/images/icons/${icon}.png`} alt={title} className="img" />
      ) : null}{" "}
    </div>
  );
};
export default SectionTitle;
