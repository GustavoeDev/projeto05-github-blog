import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://api.github.com/users",
});
