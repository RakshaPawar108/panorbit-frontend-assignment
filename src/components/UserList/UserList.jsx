import { Card } from "react-bootstrap";
import { useUsers } from "../../context";
import { UserListItem } from "../UserListItem/UserListItem";
import "./UserList.css";
import Scrollbars from "react-custom-scrollbars-2";

export const UserList = () => {
  let users = useUsers();
  return (
    <Card className="user-list" style={{ borderRadius: "1rem" }}>
      <Card.Header
        className="list-header"
        style={{
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
          padding: "2rem",
        }}
      >
        Select an account
      </Card.Header>
      <Scrollbars style={{ height: 300, overflowX: "hidden" }}>
        <Card.Body className="list-body">
          {users.map((user) => (
            <UserListItem
              key={user.id}
              name={user.name}
              image={user.profilepicture}
              userId={user.id}
            />
          ))}
        </Card.Body>
      </Scrollbars>
    </Card>
  );
};
