import axios from "axios";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://bidspace.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}

export default apiUrl