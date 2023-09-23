const BurgerMenu = ({ xmlns, width, height, viewBox, style, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 601 385"
      style={{
        fillRule: "evenodd",
        ...style,
      }}
      {...props}
    >
      <path
        d="M37,23H637V78.756H37V23Zm0,163.672H637v55.757H37V186.672ZM364.273,351.244H637V407H364.273V351.244Z"
        transform="translate(-36.5 -22.5)"
      />
    </svg>
  );
};
export default BurgerMenu;
