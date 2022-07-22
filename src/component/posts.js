import { useContext, useState } from "react";
import { auth } from "../fireBaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import PostsContext from "../Context";

import Delete from "./DeletePost";
import Update from "./UpdateSavePosts";
import { Dropdown } from "react-bootstrap";
import Pop from "./PopUp";
import Like from "./Like";
import Comments from "./Comments";

import "./posts.css";

const Post = () => {
  const [user] = useAuthState(auth);
  // const [saveState, setSaveState] = useState(false);
  const [posts] = useContext(PostsContext);
  // const [postss, setPosts] = useState([]);
  const navigate = useNavigate();

  const [searchOfName, setSearchOfName] = useState("");
  function handelSearchOfItemProduct(e) {
    setSearchOfName(e.target.value);
    console.log(searchOfName);
  }

  const handelEdit = (id) => {
    navigate(`/update/${id}`);
    window.scrollTo(0, 250);
  };
  // const handelerSavePost = (postId) => {
  //   let newPosts = [...posts];
  //   let index = newPosts.findIndex((el) => el.id === postId);
  //   newPosts[index].isSaved = !newPosts[index].isSaved;
  //   console.log(newPosts);
  //   // setPosts(newPosts);

  //   setSaveState(newPosts[index].isSaved);
  // };
  return (
    <div>
      {posts.length === 0 ? (
        <div className="notPost">
          <i className="fa fa-camera" style={{ fontSize: 28 }}></i>
          <p style={{ fontSize: 28 }}>No Posts Yet</p>
        </div>
      ) : (
        <div>
          <div className="form-group mb-5 search">
            <fieldset>
              <input
                onChange={(event) => handelSearchOfItemProduct(event)}
                className="form-control "
                id="disabledInput"
                type="text"
                placeholder="Search By Name and Title"
                disabled=""
              />
            </fieldset>
          </div>
          {posts
            .filter((valueSearch) => {
              if (searchOfName === "") {
                console.log(valueSearch.userName);
                return valueSearch;
              } else if (
                valueSearch.userName
                  .toLowerCase()
                  .includes(searchOfName.toLowerCase()) ||
                valueSearch.title
                  .toLowerCase()
                  .includes(searchOfName.toLowerCase())
              ) {
                console.log(valueSearch.userName);
                return valueSearch;
              }
            })
            .map((post) => (
              <div key={post.id} className="posts mb-5">
                <div className="row">
                  <div style={{ paddingRight: 20 }} className="col">
                    {post.userName && (
                      <div>
                        <div className="d-flex" style={{ paddingLeft: 25 }}>
                          <img
                            src="8.jpg"
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
                  <div className="col d-flex justify-content-end">
                    <Dropdown style={{ paddingRight: 25 }}>
                      <Dropdown.Toggle
                        style={{
                          backgroundColor: "transparent",
                          color: "rgb(13, 110, 253)",
                        }}
                        id="dropdown-basic"
                      ></Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          {user && user.uid === post.userId && (
                            <Delete id={post.id} image={post.image} />
                          )}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Update post={post} />
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {user && user.uid === post.userId && (
                            <>
                              <div>
                                <i
                                  className="fa fa-pencil"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handelEdit(post.id)}
                                >
                                  <span> Edit post</span>
                                </i>
                              </div>
                            </>
                          )}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <h3
                      style={{ textTransform: "capitalize", fontSize: 20 }}
                      className="title-post"
                    >
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex ">
                    <h5
                      className="description-post"
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
                  <div style={{ maxHeight: "600px" }} className="col-12">
                    <img
                      src={post.image}
                      alt="title"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ marginTop: 20, paddingRight: "35px" }}
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
                {/* <div className="col-4">
                    <img
                      src={post.image}
                      alt="title"
                      style={{ width: 180, height: 180 }}
                    />
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{ backgroundColor: "transparent", color: "red" }}
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        {user && user.uid === post.userId && (
                          <Delete id={post.id} image={post.image} />
                        )}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Update post={post} />
                      </Dropdown.Item>
                      <Dropdown.Item>
                        {user && user.uid === post.userId && (
                          <>
                            <a href="#create">
                              <i
                                className="fa fa-pencil"
                                style={{ cursor: "pointer" }}
                                onClick={() => handelEdit(post.id)}
                              ></i>
                            </a>
                            Edit post
                          </>
                        )}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        {post.userName && (
                          <span className="badge bg-primary">
                            {post.userName}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.Date.toDate().toDateString()}</p>
                    <h5>{post.description.substr(0, 30)}</h5>
                    <button className="btn btn-white">
                      <Link to={`/details/${post.id}`} className="nav-link">
                        Read more
                      </Link>
                    </button>
                  </div>*/}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Post;
