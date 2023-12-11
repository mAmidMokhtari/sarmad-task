import axios from "axios";

export const http = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    "Content-type": "application/json",
  },
});

export const AuthHttp = axios.create({
  baseURL: `https://apingweb.com/api/`,
  headers: {
    "Content-type": "application/json",
  },
});
