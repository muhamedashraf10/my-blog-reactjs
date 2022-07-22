import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import PostsContext from "../Context";
import { db } from "../fireBaseConfig";

const Update = ({ post }) => {
  const [saveSate, setSaved] = useState(false);
  const handelSavePosts = async () => {
    const save = !saveSate;
    const updateRef = doc(db, "Blog", post.id);
    await updateDoc(updateRef, {
      isSaved: !post.isSaved,
    });
    setSaved(save);
  };
  return (
    <div>
      <div
        style={{ borderBottom: "1px solid  #eeeeee" }}
        onClick={() => handelSavePosts()}
      >
        {post.isSaved ? (
          <>
            <i className="fa fa-bookmark">
              <span> Unsave post</span>
            </i>
          </>
        ) : (
          <>
            <i className="fa fa-bookmark-o">
              <span> Save post</span>
            </i>
          </>
        )}
      </div>
    </div>
  );
};

export default Update;
