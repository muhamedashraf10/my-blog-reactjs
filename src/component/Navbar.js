import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../fireBaseConfig";
import { signOut } from "firebase/auth";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          {user ? (
            <NavLink className="navbar-brand" to="/">
              <img
                alt=""
                src="8.jpg"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "10px",
                  textTransform: "capitalize",
                }}
              >
                {user.displayName || user.email}
              </span>
            </NavLink>
          ) : (
            <NavLink className="navbar-brand" to="/login">
              <img
                src="3.png"
                alt=""
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              />
            </NavLink>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/">
                  <i
                    style={{ fontSize: "20px" }}
                    className="fas fa-home mx-5"
                  ></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i
                    style={{ fontSize: "20px" }}
                    className="fas fa-address-card mx-5"
                  ></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/saveposts">
                  <i
                    style={{ fontSize: "20px" }}
                    className="fas fa-flag mx-5"
                  ></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="watches">
                  <i style={{ fontSize: "20px" }} className="fa fa-tv mx-5"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {user && (
            <>
              <button
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
                className="btn btn-light btn-sm me-5 text-primary fw-bold"
              >
                LogOut
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
