import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="containers">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>
                  25 Nessiem El Gazar street <br />
                  Ismailia, Egypy.
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                <span>muhamedashref02@gmail.com</span>
              </li>
              <li>
                <span>
                  <i className="fa fa-mobile"></i>
                </span>
                <span>+20 | 01276567619</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com/elmagik.toshka" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhamed-ashraf-052a64242/"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile</span>
            </div>
            <div className="inputBox w50">
              <textarea required></textarea>
              <span>Write your message</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
