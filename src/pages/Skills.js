import Footer from "../component/Footer";
import "./Skills.css";
const Skills = () => {
  return (
    <>
      <section style={{ backgroundColor: "#eee", marginTop: 55 }}>
        <div className="container py-5">
          <h4 className="text-center mb-5">
            <strong
              className="badge rounded-pill bg-primary"
              style={{
                borderBottom: "3px solid ",
                fontSize: "30px",
                fontWeight: "bolder",
                boxShadow: " 0 10px 25px rgba(92, 99, 105, 0.2)",
              }}
            >
              My Skills
            </strong>
          </h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?cs=srgb&dl=pexels-realtoughcandycom-11035386.jpg&fm=jpg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          CSS3
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          React Js
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          HTML5
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards ripple-surface">
                <img
                  src="https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          JSON
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?cs=srgb&dl=pexels-realtoughcandycom-11035471.jpg&fm=jpg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          React Native
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?cs=srgb&dl=pexels-markus-spiske-2004161.jpg&fm=jpg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          JavaScript
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://serv2.raiolanetworks.es/blog/wp-content/uploads/portada-3.jpg"
                  height="277.2px"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          BootStrap 5
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://devops.com.vn/wp-content/uploads/2021/02/firebase.png"
                  className="w-100"
                  height="277.2px"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          Firebase
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-100"
                  height="277.2px"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          Node Js
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/UVlzv5dlRqaKaswsfUPk"
                  className="w-100"
                  height="277.2px"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          Next Js
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://kodefin.com/storage/img1610824322.jpg"
                  height="277.2px"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          Tailwind Css
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded cards">
                <img
                  src="https://images.velog.io/images/ahn-sujin/post/e0c5c02c-f7ad-4c4e-9ce3-ca726cf10ca4/es6%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg"
                  height="277.2px"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          ECMAscript 6
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Skills;
