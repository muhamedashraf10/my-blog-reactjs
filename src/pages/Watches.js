import ReactPlayer from "react-player";
import "./Watches.css";

const Watches = () => {
  return (
    <>
      <div className="video-player">
        {/* <div className="mb-5">
        <ReactPlayer url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
      </div>
      <div className="mb-5">
        <ReactPlayer url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
      </div>
      <div className="mb-5">
    </div> */}
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=MFuwkrseXVE&t=5026s" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Next Js
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Tailwind Css
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=mrdJWYVdvVg" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              React Js
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=4aIxY-pGEQ4&t=142s" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              El Da7ee7
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=2Vv-BfVoq4g" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Song
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=IxPJILjc2oE" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Anime
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=w_gJo7khl6I" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Football
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=MITRAFQ7QLw" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Series
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card " style={{ borderRadius: "40px" }}>
          <div className="iframe">
            <ReactPlayer url="https://www.youtube.com/watch?v=aWzlQ2N6qqg" />
          </div>
          <div className="card-body px-3 pb-5">
            <h5
              className="card-title"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              Movies
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <footer
        class="text-center text-white"
        style={{ backgroundColor: "#45637d", marginTop: "3%" }}
      >
        <div className="container p-4">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright :
          <a
            style={{ marginLeft: "6px" }}
            className="text-white"
            href="https://mdbootstrap.com/"
          >
            MY BLOG
          </a>
        </div>
      </footer>
    </>
  );
};

export default Watches;
