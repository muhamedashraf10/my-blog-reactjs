import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { db, storage } from "../fireBaseConfig";

const Delete = ({ id, image }) => {
  const handelDelete = async () => {
    try {
      await deleteDoc(doc(db, "Blog", id));
      toast("Post deleted successfully", { type: "success" });
      const strorageRef = ref(storage, image);
      await deleteObject(strorageRef);
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (
    <div style={{ borderBottom: "1px solid #eeeeee" }}>
      <i
        onClick={() => handelDelete()}
        className="fa fa-trash"
        style={{ cursor: "pointer" }}
      >
        <span> Delete post</span>
      </i>
    </div>
  );
};

export default Delete;
