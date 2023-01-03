import { createContext, useContext, useState } from "react";

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

const useUsers = () => useContext(UsersContext);

export { UsersProvider, useUsers };
