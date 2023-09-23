import { Link } from "react-router-dom";
import Button from "../../primitives/buttons/Button";
import "./error-page.css";

const Error = () => {
  return (
    <div className="error-page">
      <h2 className="h2">Page Not Found!</h2>
      <p>Error 404</p>
      <Button as={Link} variant="red-filled-bordered" to="/">
        Navigate Back to Home Page
      </Button>
    </div>
  );
};
export default Error;
