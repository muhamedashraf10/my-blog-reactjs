import { useNavigate } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: 100 }}
    >
      <div className="profile">
        <img className="__image me-5" src="../SZPH0600.jpg" />
        <div className="__content">
          <h2
            style={{ textTransform: "capitalize", color: " rgb(13, 110, 253)" }}
          >
            mohamed ashraf mohamed abdel ghani mostafa
          </h2>
          <p>
            I have 23 years old. I graduated from faculty of Computer and
            Infomatices from Suez Canal University department Information System
            class 2021 with final grade Very Good and +A from final Project.
            FrontEnd web developer and Cross Platform Mobile App Studied in ITI
            (Information Technology Institute). I have experience in web
            development (front end , mobile app) using technologies (Html5,
            CSS3, javascript, ECMAscript,responsive web
            design,firebase,Api,UI/UX design,Ajax,Json,React Native,React js and
            Next.js ) during my college and ITI scholarship where I gained more
            especially experience in working as a team and freelancing work.
          </p>
          <div className="mt-5">
            <button
              className="btn btn-primary sm"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
