import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../fireBaseConfig";

const Like = ({ id, likes }) => {
  const [user] = useAuthState(auth);

  const likesRef = doc(db, "Blog", id);
  const handelLikes = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unlike");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("like");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <i
        className={`fa fa-heart${!likes?.includes(user.uid) ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "#FD1D1D" : null,
        }}
        onClick={handelLikes}
      ></i>
    </div>
  );
};

export default Like;
