import { Image } from "react-bootstrap";
import "./ProfilePage.css";
import { DetailsDropdown, Navbar } from "../../components/";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

export const ProfilePage = () => {
  const params = useParams();

  const currentUserId = params.userId;
  const findUser = (userId) => {
    return data.users.find((user) => user.id === userId);
  };

  const currentUser = findUser(parseInt(currentUserId));

  return (
    <div className="main-wrapper">
      <div className="navbar-wrapper" style={{ width: "22%" }}>
        <Navbar />
      </div>
      <div className="profile-wrapper">
        <div className="page-wrapper">
          <div className="details-section-wrapper">
            <div className="details-header-wrapper">
              <div className="details-title-wrapper">
                <p className="details-title">Profile</p>
              </div>
              <div className="details-dropdown-wrapper">
                <Image roundedCircle src={currentUser.profilepicture} />
                <DetailsDropdown name={currentUser.name} />
              </div>
            </div>
            <div className="details-content-wrapper">
              <div className="details-content-col1-wrapper">
                <div className="details-personal-wrapper">
                  <div className="user-name-section">
                    <Image roundedCircle src="abc" />
                    <p className="details-title">{currentUser.name}</p>
                  </div>
                  <div className="user-details-main-section">
                    <div className="user-details-title-section">
                      <p className="detail-item">
                        <span className="light-name">Username :</span>
                      </p>
                      <p className="detail-item">
                        <span className="light-name">e-mail :</span>
                      </p>
                      <p className="detail-item">
                        <span className="light-name">Phone : </span>
                      </p>
                      <p className="detail-item">
                        <span className="light-name">Website :</span>
                      </p>
                    </div>
                    <div
                      className="user-details-filler-section"
                      style={{ width: "60%" }}
                    >
                      <p className="detail-item">{currentUser.username}</p>
                      <p className="detail-item">{currentUser.email}</p>
                      <p className="detail-item">{currentUser.phone}</p>
                      <p className="detail-item">{currentUser.website}</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="details-company-wrapper">
                  <div
                    className="user-name-section"
                    style={{ paddingBottom: "2rem" }}
                  >
                    <p className="light-name">Company</p>
                  </div>
                  <div className="company-details-main-section">
                    <div className="user-details-title-section">
                      <p className="detail-item">
                        <span className="light-name">Name :</span>
                      </p>
                      <p className="detail-item">
                        <span className="light-name">catchphrase :</span>
                      </p>
                      <p
                        className="detail-item light-name"
                        style={{ marginTop: "4rem" }}
                      >
                        bs :
                      </p>
                    </div>
                    <div className="user-details-filler-section">
                      <p className="detail-item">{currentUser.company.name}</p>
                      <p className="detail-item">
                        {currentUser.company.catchPhrase}
                      </p>
                      <p className="detail-item">{currentUser.company.bs}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details-content-col2-wrapper">
                <div className="details-address-name-wrapper">
                  <p className="light-name">Address :</p>
                </div>
                <div
                  className="details-address-wrapper"
                  style={{ marginLeft: "0" }}
                >
                  <div
                    className="user-address-details-section"
                    style={{ width: "80%", marginLeft: "-1.5rem" }}
                  >
                    <div className="address-details-section">
                      <div
                        className="address-title-section"
                        style={{ width: "40%" }}
                      >
                        <p className="detail-item">
                          <span className="light-name">Street : </span>
                        </p>
                        <p className="detail-item">
                          <span className="light-name">Suite : </span>
                        </p>
                        <p className="detail-item">
                          <span className="light-name">City : </span>
                        </p>
                        <p className="detail-item">
                          <span className="light-name">Zipcode : </span>
                        </p>
                      </div>
                      <div
                        className="address-filler-section"
                        style={{ width: "60%" }}
                      >
                        <p className="detail-item">
                          {currentUser.address.street}
                        </p>
                        <p className="detail-item">
                          {currentUser.address.suite}
                        </p>
                        <p className="detail-item">
                          {currentUser.address.city}
                        </p>
                        <p className="detail-item">
                          {currentUser.address.zipcode}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="map-wrapper">
                    <Image src="abc" />
                  </div>
                  <div className="latitude-longitude-wrapper">
                    <p className="lat-long-text">
                      Lat :
                      <span className="lat-long-num">
                        {" "}
                        {currentUser.address.geo.lat}
                      </span>
                    </p>
                    <p className="lat-long-text">
                      Long :
                      <span className="lat-long-num">
                        {" "}
                        {currentUser.address.geo.lng}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
