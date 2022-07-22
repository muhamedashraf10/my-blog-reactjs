import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../fireBaseConfig";
import { Carousel } from "react-bootstrap";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handelSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast(error.code, { type: error });
    }
  };

  return (
    <div className="container log-in" style={{ marginTop: 70 }}>
      <div className="row">
        <div className="l-form col-4">
          <div className="form">
            <h1 className="form__title">Sign in</h1>
            <div className="form__div">
              <input
                type="email"
                className="form__input"
                placeholder=" "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="" className="form__label">
                Email
              </label>
            </div>
            <div className="form__div">
              <input
                type="password"
                className="form__input"
                placeholder=" "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="" className="form__label">
                Password
              </label>
            </div>

            <button
              className="form__button mb-5"
              onClick={() => handelSignIn()}
            >
              Sign in
            </button>
            <div style={{ fontSize: 13, fontWeight: "bold" }}>
              Do you need a new account?
              <Link to="/register"> Create new account</Link>
            </div>
          </div>
        </div>

        <div className="col-8">
          <Carousel style={{ marginTop: 55 }}>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="50.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="60.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="70.jpg" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Login;
