import axios from "axios";

export const http = axios.create({
  baseURL: `https://dummyjson.com`,
  headers: {
    "Content-type": "application/json",
  },
});
