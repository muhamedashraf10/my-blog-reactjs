import { useContext } from "react";
import PostsContext from "../Context";
import { auth } from "../fireBaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import RemoveSavePost from "../component/RemoveSavePost";

import "./SavePosts.css";
import Like from "../component/Like";

const SavePosts = () => {
  const [posts] = useContext(PostsContext);
  const [user] = useAuthState(auth);

  // {
  //   user && user.uid === post.userId && (
  //     <Delete id={post.id} image={post.image} />
  //   );
  // }
  //   const postss = [...posts];
  return (
    <div className="container" style={{ height: "100%", marginTop: 100 }}>
      {posts
        .filter((el) => el.isSaved === true)
        .map((post) => (
          <div key={post.id} className="posts postsSave mb-5">
            <div className="row">
              <div className="col-4">
                <div style={{ maxHeight: "400px" }}>
                  <img
                    src={post.image}
                    alt="title"
                    style={{ width: "100%", height: "300px" }}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ paddingRight: 20 }} className="col detailsPost">
                    {post.userName && (
                      <div>
                        <div className="d-flex" style={{ paddingLeft: 25 }}>
                          <img
                            src="../8.jpg"
                            alt=""
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="post-content">
                            <span style={{ textTransform: "capitalize" }}>
                              {post.userName}
                            </span>
                            <p>{post.Date.toDate().toDateString()}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col d-flex justify-content-end detailsPost">
                    <RemoveSavePost id={post.id} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <h3
                      style={{ textTransform: "capitalize", fontSize: 20 }}
                      className="title-post mt-0"
                    >
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex ">
                    <h5
                      className="description-post mt-2"
                      style={{ paddingLeft: 25 }}
                    >
                      {post.description.substr(0, 200)}
                      <Link
                        to={`/details/${post.id}`}
                        className="nav-link d-inline"
                      >
                        . . . Read more
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ marginTop: 20, paddingRight: "50px" }}
                    className="col-12 d-flex flex-row-reverse text-secondary
                    "
                  >
                    {user && <Like id={post.id} likes={post.likes} />}
                    <div className="pe-2">
                      <p>{post.likes?.length} Likes</p>
                    </div>
                    {post.comments && post.comments.length > 0 && (
                      <div className="pe-2">
                        <p>{post.comments?.length} Comments</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SavePosts;
