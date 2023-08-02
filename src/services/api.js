import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  // baseURL: "https://backend-foodsexplorer.onrender.com/",
});

api
  .get("")
  .then((response) => {})
  .catch((error) => {
    console.error(error);
  });
