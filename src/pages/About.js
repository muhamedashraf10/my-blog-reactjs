import Footer from "../component/Footer";
import "./about.css";
const About = () => {
  return (
    <>
      <div
        id="carouselMultiItemExample"
        className="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div className="about"></div>
        <h4 style={{ marginBottom: 50 }}>
          <strong
            className="badge rounded-pill bg-primary"
            style={{
              borderBottom: "3px solid ",
              fontSize: "30px",
              fontWeight: "bolder",
              boxShadow: " 0 10px 25px rgba(92, 99, 105, 0.2)",
            }}
          >
            About
          </strong>
        </h4>
        <div className="carousel-inner py-5">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="./a.jpg"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">Eng.Ahmed Zaghlul</h5>
                  <p>React Js</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Thank you for the effort you made with me. Thank you for
                    helping me to develop. I benefited a lot from you. Thank you
                    for your support. I am happy to know you and I am proud that
                    you are my instructor. Thank you for everything.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="./n.jpg"
                    alt="avatar"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5 className="mb-3">ITI</h5>
                  <p>Front End</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    At ITI as a trainee, I got some really valuable skills,
                    gained a lot of experience in a short time, studied and
                    practiced a lot of courses and technical skills in a
                    professional way I also worked on improving my personal
                    skills, working under pressure, and many of the skills that
                    I acquired through the training courses provided by the
                    Institute. Thank you very much for developing my skills and
                    transforming me from a beginner to a person with knowledge
                    and experience. Thank you very much to the Information
                    Technology Institute (ITI).
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="./m.jpg"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">FCI</h5>
                  <p>Education</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Thank you to the Faculty of Computers and Information
                    because it introduced me to the field of technology and
                    thank you for 4 years of education
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
