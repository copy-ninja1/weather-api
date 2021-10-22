import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: "https://api.weatherapi.com",
});

export default AxiosInstance;
