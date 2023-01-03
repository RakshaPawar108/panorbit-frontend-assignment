import { createContext, useContext, useEffect, useState } from "react";
import { getUsers } from "../utils";

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

const useUsers = () => useContext(UsersContext);

export { UsersProvider, useUsers };
