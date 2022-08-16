import axios from "axios";
export default axios.create({
  baseURL: "https://shielded-fortress-97928.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
