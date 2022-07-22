// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./side.css";
const SideLeft = () => {
  return (
    <div className="wrapper">
      <div className="bg-primary sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            <Link to="#">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fas fa-user"></i>Profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-address-card"></i>About
            </Link>
          </li>
          <li>
            <Link to="skills">
              <i className="fas fa-project-diagram"></i>My Skills
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-blog"></i>Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fas fa-address-book"></i>Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/@30.5961861,32.2714752,10z"
              target="_blank"
            >
              <i className="fas fa-map-pin"></i>Map
            </a>
          </li>
        </ul>
        <div className="social_media">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
