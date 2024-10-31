import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export const searchIssues = axios.create({
  baseURL: "https://api.github.com/search",
});
