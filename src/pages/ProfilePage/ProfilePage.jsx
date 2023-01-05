import { Container, Image } from "react-bootstrap";
import "./ProfilePage.css";
import { DetailsDropdown, Navbar } from "../../components/";

export const ProfilePage = () => {
  return (
    <Container className='main-wrapper'>
      <Container className="navbar-wrapper" style={{ width: "22%" }}>
        <Navbar />
      </Container>
      <Container className="profile-wrapper">
        <Container className="page-wrapper">
          <Container className="details-section-wrapper">
            <Container className="details-header-wrapper">
              <Container className="details-title-wrapper">
                <p className="details-title">Profile</p>
              </Container>
              <Container className="details-dropdown-wrapper">
                <DetailsDropdown />
              </Container>
            </Container>
            <Container className="details-content-wrapper">
              <Container className="details-content-col1-wrapper">
                <Container className="details-personal-wrapper">
                  <Container className="user-name-section">
                    <Image roundedCircle src="abc" />
                    <p className="details-title">User Name</p>
                  </Container>
                  <Container className="user-details-section">
                    <p className="detail-item">
                      <span className="light-name">Username :</span> Abcd
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
                  </Container>
                </Container>
                <hr />
                <Container className="details-company-wrapper">
                  <Container className="user-name-section">
                    <p className="light-name">Company</p>
                  </Container>
                  <Container className="user-details-section">
                    <p className="detail-item">
                      <span className="light-name">Name :</span> Abcd
                    </p>
                    <p className="detail-item">
                      <span className="light-name">catchphrase :</span>
                    </p>
                    <p className="detail-item">
                      <span className="light-name">bs : </span>
                    </p>
                  </Container>
                </Container>
              </Container>
              <Container className="details-content-col2-wrapper">
                <Container className="details-address-name-wrapper">
                  <p className="light-name">Address :</p>
                </Container>
                <Container className="details-address-wrapper">
                  <Container className="user-address-details-section">
                    <Container className="address-details-section">
                      <Container className="address-title-section">
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
                      </Container>
                    </Container>
                  </Container>
                  <Container className="map-wrapper">
                    <Image src="abc" />
                  </Container>
                  <Container className="latitude-longitude-wrapper">
                    <p className="lat-long-text">
                      Lat :<span className="lat-long-num"> 123</span>
                    </p>
                    <p className="lat-long-text">
                      Long :<span className="lat-long-num"> 456</span>
                    </p>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
