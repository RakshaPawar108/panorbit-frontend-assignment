import { Image } from "react-bootstrap";
import { Navbar } from "../../components/Navbar/Navbar";
import { DetailsDropdown } from "../../components";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./TodoPage.css";

export const TodoPage = () => {
  const params = useParams();
  const currentUserId = params.userId;
  const findUser = (userId) => {
    return data.users.find((user) => user.id === userId);
  };

  const currentUser = findUser(parseInt(currentUserId));
  return (
    <div className="main-wrapper">
      <div className="navbar-wrapper" style={{ width: "46%" }}>
        <Navbar userId={currentUser.id} />
      </div>
      <div className="details-header-wrapper">
        <div className="details-title-wrapper">
          <p className="details-title">ToDo</p>
        </div>
        <div className="details-dropdown-wrapper">
          <Image
            className="image-circle-small"
            roundedCircle
            src={currentUser.profilepicture}
          />
          <DetailsDropdown name={currentUser.name} />
        </div>
      </div>
      <div className="details-content-wrapper">
        <div className="details-content-col1-wrapper" style={{ width: "100%" }}>
          <div className="details-personal-wrapper">
            <div className="coming-soon-wrapper">
              <div className="coming-soon-heading">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
