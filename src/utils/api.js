import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: "http://api.weatherapi.com",
});

export default AxiosInstance;
