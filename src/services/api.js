import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://foodexplorer-backend-v6hy.onrender.com",
});

// api
//   .get("")
//   .then((response) => {})
//   .catch((error) => {
//     console.error(error);
//   });
