import { fetchUsers } from "../services/Users/fetchUsers";

export const getUsers = async (setUsers) => {
  try {
    const response = await fetchUsers();
    if (response.status === 200) {
      setUsers(response.data.users);
      console.log(response)
    }
  } catch (err) {
    console.log(err);
  }
};
