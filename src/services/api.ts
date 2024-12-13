import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.56:3333",
  // baseURL: "http://182.168.15.189:3333",
  timeout: 700,
})