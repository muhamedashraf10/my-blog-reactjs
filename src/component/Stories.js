import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../fireBaseConfig";
import { useEffect, useState } from "react";

const Story = () => {
  const [stories, setStories] = useState(null);

  useEffect(() => {
    const postRef = collection(db, "Blog");
    const q = query(postRef, orderBy("Date", "desc"));
    onSnapshot(q, (snapshot) => {
      const stories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStories(stories);
      console.log(stories);
    });
  }, []);

  return (
    <>
      {stories ? (
        <Carousel style={{ marginTop: "12%" }}>
          {stories?.map((item) => (
            <Carousel.Item
              style={{ borderRadius: 30 }}
              key={item.id}
              interval={1000}
            >
              <Link to={`/details/${item.id}`}>
                <img
                  style={{ width: "200px", height: "400px", borderRadius: 30 }}
                  className="d-block w-100"
                  src={item.image}
                  alt={item.title}
                />
                <Carousel.Caption
                  style={{
                    // backgroundColor: "rgba(189, 189, 189, 0.8)",
                    color: "rgba(158, 158, 158,1)",
                    fontSize: 13,
                  }}
                >
                  <h3 style={{ textTransform: "capitalize" }}>{item.title}</h3>
                  <p style={{ textTransform: "capitalize" }}>
                    {item.userName} - {item.Date.toDate().toDateString()}
                  </p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div
          style={{
            position: "relative",
            left: "100%",
            transform: "translate(-50%,50%)",
            marginTop: 70,
          }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Story;
