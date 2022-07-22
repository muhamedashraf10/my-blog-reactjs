import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../fireBaseConfig";
import { v4 as uuidv4 } from "uuid";

const Comments = ({ id }) => {
  const [comment, setComment] = useState("");
  const [commentsPost, setCommentsPost] = useState([]);
  const [currentUser] = useAuthState(auth);
  const commentRef = doc(db, "Blog", id);

  useEffect(() => {
    const docRef = doc(db, "Blog", id);
    onSnapshot(docRef, (snapshot) => {
      setCommentsPost(snapshot.data().comments);
    });
  }, []);

  const handelChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          user: currentUser.uid,
          userName: currentUser.displayName,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };
  const handelDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(comment);
        console.log(e);
        console.log(comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      {currentUser && (
        <input
          type="text"
          className="form-control mt-4 mb-3"
          value={comment}
          style={{ borderRadius: "20px", backgroundColor: "#F2F3F5" }}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Comment ..."
          onKeyUp={(e) => handelChangeComment(e)}
        />
      )}
      <div className="px-4">
        {commentsPost !== null &&
          commentsPost.map(
            ({ commentId, user, comment, userName, createdAt }) => (
              <div key={commentId}>
                <div
                  className="mt-2 row"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#F2F3F5",
                    padding: 10,
                  }}
                >
                  <div className="col-11">
                    <div className="d-flex">
                      <div className="me-2">
                        <img
                          src="../8.jpg"
                          alt=""
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div>
                        <span
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bolder",
                          }}
                          className={`${
                            user === currentUser.uid
                              ? "text-primary"
                              : "text-dark"
                          }`}
                        >
                          {userName}
                        </span>
                        <p>{comment}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    {user === currentUser.uid && (
                      <i
                        className="fa fa-times"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handelDeleteComment({
                            commentId,
                            user,
                            comment,
                            userName,
                            createdAt,
                          })
                        }
                      ></i>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Comments;
