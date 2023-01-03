import axios from "axios";

export const fetchUsers = () => axios.get("https://panorbit.in/api/users.json");