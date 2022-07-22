import React from "react";
import { Link, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PopUp.css";
import { auth, db, storage } from "../fireBaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import CreatePost from "./CreatePosts";

const Pop = () => {
  const { id } = useParams();

  const [user] = useAuthState(auth);
  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested
    >
      <CreatePost />
    </Popup>
  );
};
export default Pop;
