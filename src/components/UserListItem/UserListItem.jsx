import { Card, Image } from "react-bootstrap";
import "./UserListItem.css";

export const UserListItem = ({ name, image }) => {
  return (
    <Card.Text
      style={{ borderBottom: "1px solid #ccc" }}
      className="list-item-text"
    >
      <Image src={image} roundedCircle={true} />
      {name}
    </Card.Text>
  );
};
