import { useUsers } from "../../context";
import { UserListItem } from "../UserListItem/UserListItem";

export const UserList = () => {
  let users = useUsers();
  return (
    <div>
      {users.map((user) => (
        <UserListItem key={user.id} name={user.name} />
      ))}
    </div>
  );
};
