import axios from "axios";
import "dotenv/config";


const token = process.env.BEARER_TOKEN;

const api = axios.create({
  baseURL: "https://api.twitter.com/2/",
  headers: {
    "authorization": `Bearer ${token}`,
  },
});

export default api;

