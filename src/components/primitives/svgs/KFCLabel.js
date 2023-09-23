const KFCLabel = ({ xmlns, width, height, viewBox, style, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1420.19 413"
      style={{
        fillRule: "evenodd",
        ...style,
      }}
      {...props}
    >
      <path
        d="M210,58H577V430c0,12.163-2.36,29.782,1,40H209v-1c3.6-5.838,1-22.872,1-31V58Zm526,0h366V430c0,12.163-2.36,29.782,1,40H735v-1c3.6-5.838,1-22.872,1-31V58Zm525,0h366V430c0,12.163-2.36,29.782,1,40H1260v-1c3.6-5.838,1-22.872,1-31V58Z"
        transform="translate(-208.5 -57.5)"
      />
    </svg>
  );
};
export default KFCLabel;
