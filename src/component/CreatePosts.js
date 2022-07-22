import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db, storage } from "../fireBaseConfig";

import "./CreatePosts.css";

const CreatePost = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  console.log(location);
  const [user] = useAuthState(auth);
  const [formPost, setFormPost] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    id && getPostOfSingleUser();
  }, [id]);

  const getPostOfSingleUser = async () => {
    const getPostRef = doc(db, "Blog", id);
    const snapshot = await getDoc(getPostRef);
    if (snapshot.exists()) {
      setFormPost({ ...snapshot.data() });
    }
  };

  const [progress, setProgress] = useState(0);

  const handelChangeOfTitleAndDescription = (e) => {
    setFormPost({ ...formPost, [e.target.name]: e.target.value });
  };

  const handelChangeImage = (e) => {
    setFile(e.target.files[0]);
  };

  const handelSubmitPosts = async (e) => {
    e.preventDefault();
    if (formPost.title && formPost.description && formPost.image) {
      if (!id) {
        try {
          await addDoc(collection(db, "Blog"), {
            ...formPost,
            Date: Timestamp.now().toDate(),
            userName: user.displayName,
            userId: user.uid,
            isSaved: false,
            likes: [],
            comments: [],
          });
          toast("Post added successfully", { type: "success" });
          setProgress(0);
        } catch (err) {
          toast("Error adding post", { type: "error" });
        }
      } else {
        try {
          await updateDoc(doc(db, "Blog", id), {
            ...formPost,
            Date: Timestamp.now().toDate(),
            userName: user.displayName,
            userId: user.uid,
          });
          toast("Post update successfully", { type: "success" });
          setProgress(0);
        } catch (error) {
          toast("Error update post", { type: "error" });
        }
      }
    } else {
      toast("Please fill all the fields", { type: "error" });
      return;
    }

    navigate("/");
    handelClear();
  };

  useEffect(() => {
    const upLoadImage = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const upLoadImage = uploadBytesResumable(storageRef, file);
      upLoadImage.on(
        "state_changed",
        (snapshot) => {
          const progressPrecent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPrecent);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(upLoadImage.snapshot.ref).then((url) => {
            setFormPost((prev) => ({ ...formPost, image: url }));
          });
        }
      );
    };
    file && upLoadImage();
  }, [file]);

  // const handelSharePost = async () => {
  //   if (!formPost.title || !formPost.description || !formPost.image) {
  //     toast("Please fill all the fields", { type: "error" });

  //     return;
  //   }
  //   const storageRef = ref(
  //     storage,file.name
  //   );

  //   const upLoadImage = uploadBytesResumable(storageRef, formPost.image);

  //   upLoadImage.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progressPrecent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progressPrecent);
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     () => {
  //       setFormPost({
  //         title: "",
  //         description: "",
  //         image: "",
  //       });
  //       getDownloadURL(upLoadImage.snapshot.ref).then((url) => {
  //         const postRef = collection(db, "Blog");
  //         addDoc(postRef, {
  //           title: formPost.title,
  //           description: formPost.description,
  //           image: url,
  //           Date: Timestamp.now().toDate(),
  //           userName: user.displayName,
  //           userId: user.uid,
  //           isSaved: false,
  //         })
  //           .then(() => {
  //             toast("Post added successfully", { type: "success" });
  //             setProgress(0);
  //           })
  //           .catch((err) => {
  //             toast("Error adding post", { type: "error" });
  //           });
  //       });
  //     }
  //   );
  //   if (!id) {
  //     try {
  //       await addDoc(collection(db, "Blog"), {
  //         ...formPost,
  //         Date: serverTimestamp(),
  //         userName: user.displayName,
  //         userId: user.uid,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     try {
  //       await updateDoc(collection(db, "Blog", id), {
  //         ...formPost,
  //         Date: serverTimestamp(),
  //         userName: user.displayName,
  //         userId: user.uid,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   navigate("/");
  // };
  const handelClear = () => {
    setFormPost({
      title: "",
      description: "",
    });
  };

  return (
    <div id="create" className="create-post">
      {!user ? (
        <>
          <Link to="/login">Login to create post</Link>
          Don't have an account? <Link to="/register">Signup</Link>
        </>
      ) : (
        <form onSubmit={handelSubmitPosts}>
          <h2>{id ? "Update Post" : "Create Post"}</h2>

          {/* {title input} */}
          <label htmlFor="#title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Enter the title of post"
            value={formPost.title}
            onChange={(e) => handelChangeOfTitleAndDescription(e)}
          />

          {/* {description input} */}

          <label htmlFor="#des">Description</label>
          <textarea
            type="text"
            name="description"
            id="des"
            className="form-control"
            placeholder="Description"
            value={formPost.description}
            onChange={(e) => handelChangeOfTitleAndDescription(e)}
          />

          {/* {image input} */}
          <label htmlFor="#Image">Image</label>
          <input
            type="file"
            name="image"
            id="Image"
            className="form-control"
            accept="image/*"
            onChange={(e) => handelChangeImage(e)}
          />

          {/* {loading progress input} */}
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button className="form-control btn  mt-3">
            {id ? "Update" : "Post"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CreatePost;
