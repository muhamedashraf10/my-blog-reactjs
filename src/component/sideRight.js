import { Link } from "react-router-dom";
import "./side.css";

const SideRight = () => {
  return (
    <div className="right-side">
      <div className="rside">
        <div className="sponser">
          <h2 className="d-flex justify-content-end align-items-center mb-3">
            Sponser
          </h2>
          <div className="content d-flex justify-content-between align-items-center mb-3 dd">
            <span>
              <a
                href="https://eg.hatla2ee.com/showroom/Rich-Car/en"
                target="_blank"
              >
                This is sponser cars
              </a>
            </span>
            <a
              href="https://eg.hatla2ee.com/showroom/Rich-Car/en"
              target="_blank"
            >
              <img
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  objectFit: "cover",
                }}
              />
            </a>
          </div>
          <div className="content d-flex justify-content-between align-items-center mb-3 dd">
            <span>
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKqqMMxIsrA0YLRSNagwNEmzMLVMNDQxMDFPMUlOsjKoSDE2T05NTE5JTTIzANLmXvxpOYm5qcUKmcW5iZk5mYkA2TYVzQ&q=flames+ismailia&rlz=1C1CHBD_arEG992EG992&oq=flames+&aqs=chrome.1.69i57j46i175i199i512j0i512l3j46i512l3j0i512j0i271.6604j0j4&sourceid=chrome&ie=UTF-8"
                target="_blank"
              >
                This is sponser restaruant
              </a>
            </span>
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKqqMMxIsrA0YLRSNagwNEmzMLVMNDQxMDFPMUlOsjKoSDE2T05NTE5JTTIzANLmXvxpOYm5qcUKmcW5iZk5mYkA2TYVzQ&q=flames+ismailia&rlz=1C1CHBD_arEG992EG992&oq=flames+&aqs=chrome.1.69i57j46i175i199i512j0i512l3j46i512l3j0i512j0i271.6604j0j4&sourceid=chrome&ie=UTF-8"
              target="_blank"
            >
              <img
                src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  objectFit: "cover",
                }}
              />
            </a>
          </div>
          <div className="content d-flex justify-content-between align-items-center mb-3 dd">
            <span>
              <a
                href="https://www.google.com/search?q=travelyalla&rlz=1C1CHBD_arEG992EG992&sxsrf=ALiCzsa9Izc5YpffujyMQyCLYExAlhUA2w%3A1658474979517&ei=41HaYs6SH4WklwSIkbDIBg&gs_ssp=eJzj4tVP1zc0TDItyM6qMDQwYLRSNagwNDG1ME41TbE0STYzMzYwtDKoSLM0t7BINDE0Nkk1NzS1TPHiLilKLEvNqUzMyUkEAFzuEuk&oq=travel&gs_lcp=Cgdnd3Mtd2l6EAMYATIICAAQsQMQkQIyCwguEMcBEK8BEJECMgoILhDHARDRAxBDMggIABCABBCxAzIFCAAQgAQyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMggIABCABBDJAzoHCAAQRxCwAzoHCAAQsAMQQzoECCMQJzoFCAAQkQI6CggAELEDEIMBEEM6BAguEEM6EQguEIAEELEDEIMBEMcBENEDOggILhDUAhCRAjoHCAAQsQMQQzoLCAAQsQMQgwEQkQI6BwguELEDEEM6CwguEIAEEMcBEK8BSgQIQRgASgQIRhgAUMQJWNsVYIolaANwAXgAgAHkAYgBswiSAQUwLjQuMpgBAKABAcgBAsABAQ&sclient=gws-wiz"
                target="_blank"
              >
                This is sponser travel
              </a>
            </span>
            <a
              href="https://www.google.com/search?q=travelyalla&rlz=1C1CHBD_arEG992EG992&sxsrf=ALiCzsa9Izc5YpffujyMQyCLYExAlhUA2w%3A1658474979517&ei=41HaYs6SH4WklwSIkbDIBg&gs_ssp=eJzj4tVP1zc0TDItyM6qMDQwYLRSNagwNDG1ME41TbE0STYzMzYwtDKoSLM0t7BINDE0Nkk1NzS1TPHiLilKLEvNqUzMyUkEAFzuEuk&oq=travel&gs_lcp=Cgdnd3Mtd2l6EAMYATIICAAQsQMQkQIyCwguEMcBEK8BEJECMgoILhDHARDRAxBDMggIABCABBCxAzIFCAAQgAQyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMggIABCABBDJAzoHCAAQRxCwAzoHCAAQsAMQQzoECCMQJzoFCAAQkQI6CggAELEDEIMBEEM6BAguEEM6EQguEIAEELEDEIMBEMcBENEDOggILhDUAhCRAjoHCAAQsQMQQzoLCAAQsQMQgwEQkQI6BwguELEDEEM6CwguEIAEEMcBEK8BSgQIQRgASgQIRhgAUMQJWNsVYIolaANwAXgAgAHkAYgBswiSAQUwLjQuMpgBAKABAcgBAsABAQ&sclient=gws-wiz"
              target="_blank"
            >
              <img
                src="https://images.pexels.com/photos/316794/pexels-photo-316794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  objectFit: "cover",
                }}
              />
            </a>
          </div>
        </div>
        <ul className="d-flex flex-column justify-content-end">
          <li>
            <a
              target="_blank"
              className="d-flex justify-content-evenly align-items-center"
              href="https://play.google.com/store/apps/category/GAME?utm_source=emea_Med&utm_medium=hasem&utm_content=Sep2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-eg-1001280-Med-hasem-gm-Evergreen-Sep2020-Text_Search_BKWS%7cONSEM_kwid_43700009235203982&gclid=CjwKCAjwwo-WBhAMEiwAV4dybeqfyJJnchzeDeAbNt3TdlcosG2pSgSoifDIW_-Afwj5_MYSA3PwKRoCiasQAvD_BwE&gclsrc=aw.ds"
            >
              Games <i className="fas fa-gamepad"></i>
            </a>
          </li>
          <li>
            <Link
              className="d-flex justify-content-evenly align-items-center"
              to="/watches"
            >
              Watch <i className="fas fa-tv"></i>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex justify-content-evenly align-items-center"
              to="/saveposts"
            >
              Save Post <i className="fas fa-flag"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideRight;
