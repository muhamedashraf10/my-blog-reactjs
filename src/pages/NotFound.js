import { Link } from "react-router-dom";
import "./NotFound.css";
const Notfound = () => {
  return (
    <div className="notFound">
      <div>
        <img src="404.jpg" alt="Page not found" />
      </div>
      <button className="btn btn-danger">
        <Link style={{ textDecoration: "none" }} className="text-white" to="/">
          Go Home
        </Link>
      </button>
    </div>
  );
};

export default Notfound;
