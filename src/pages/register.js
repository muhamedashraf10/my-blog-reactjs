import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../fireBaseConfig";

import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  let navigate = useNavigate();

  const handelSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  return (
    <div className="l-form">
      <div className="form">
        <h1 className="form__title">Register</h1>
        <div className="form__div">
          <input
            type="text"
            className="form__input"
            placeholder=" "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="" className="form__label">
            Username
          </label>
        </div>
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

        <button className="form__button" onClick={() => handelSignUp()}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
