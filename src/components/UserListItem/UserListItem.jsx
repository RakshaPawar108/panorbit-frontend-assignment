import { Card, Image } from "react-bootstrap";
import "./UserListItem.css";
import { Link } from "react-router-dom";

export const UserListItem = ({ name, image, userId }) => {
  return (
    <Link
      className="list-item-link"
      to={`${userId}`}
      style={{ borderBottom: "1px solid #ccc" }}
    >
      <Card.Text className="list-item-text">
        <Image src={image} roundedCircle={true} />
        {name}
      </Card.Text>
    </Link>
  );
};
