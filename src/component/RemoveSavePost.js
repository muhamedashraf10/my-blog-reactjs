import { doc, updateDoc } from "firebase/firestore";
import { db } from "../fireBaseConfig";

const RemoveSavePost = ({ id }) => {
  const handelSavePosts = async () => {
    const updateRef = doc(db, "Blog", id);
    await updateDoc(updateRef, {
      isSaved: false,
    });
  };
  return (
    <div>
      <div onClick={() => handelSavePosts()} className="text-danger">
        <span
          style={{
            display: "block",
            border: "1.5px solid",
            padding: "3px 4px 0 4px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <i className="fa fa-times" style={{ fontSize: 20 }}></i>
        </span>
      </div>
    </div>
  );
};

export default RemoveSavePost;
