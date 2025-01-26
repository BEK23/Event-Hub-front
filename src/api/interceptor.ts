import axios from "axios";

export const BASE_URL = "https://opendata.bounceme.net:444";
export const API_URL = "https://opendata.bounceme.net:444/api";

export const API = axios.create({
  baseURL: API_URL,
});

export const API_PYTHON = axios.create({
  baseURL: "https://opendata.bounceme.net:8090",
});
