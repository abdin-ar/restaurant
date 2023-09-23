import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src="/images/large/banner.png" alt="Banner" className="img large" />
      <img
        src="/images/large/banner-small.png"
        alt="Banner"
        className="img small"
      />
    </div>
  );
};
export default Banner;
