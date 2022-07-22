import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import Comments from "../component/Comments";
import Footer from "../component/Footer";
import Like from "../component/Like";
import { auth, db } from "../fireBaseConfig";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [detailsPost, setDetailsPost] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "Blog", id);
    onSnapshot(docRef, (snapshot) => {
      setDetailsPost({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ marginTop: 70, display: "flex", justifyContent: "center" }}
      >
        {detailsPost && (
          <div className="details">
            <div className="row">
              <div style={{ paddingRight: 20 }} className="col">
                {detailsPost.userName && (
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
                          {detailsPost.userName}
                        </span>
                        <p>{detailsPost.Date.toDate().toDateString()}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12 data-info ">
                <h2>{detailsPost.title}</h2>
                <h4 className="px-4">{detailsPost.description}</h4>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 ">
                <img src={detailsPost.image} alt={detailsPost.title} />
              </div>
            </div>

            <div className="row">
              <div className="row pt-4">
                <div className="col-11 ps-5">
                  <Comments id={detailsPost.id} />
                </div>
                <div
                  className="col-1 d-flex"
                  style={{
                    marginTop: "28px",
                    fontSize: "22px",
                    marginLeft: "-30px",
                  }}
                >
                  <span className="pe-2">{detailsPost.likes.length}</span>
                  {user && (
                    <Like id={detailsPost.id} likes={detailsPost.likes} />
                  )}
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col btnBack">
                <div className="btnBack">
                  <Link className="nav-link" to="/">
                    <i className="fa fa-arrow-left"> Back</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Details;
