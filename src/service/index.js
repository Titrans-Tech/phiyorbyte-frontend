import axios from "axios";

export const base_url = "https://api.pdempire.co.uk/api/";

// https://api.trulixx.com/

export const API = axios.create({
  baseURL: base_url,
});

const CancelToken = axios.CancelToken;
let requestSignal;

API.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");

    accessToken && (config.headers["Authorization"] = "Bearer " + accessToken);
    requestSignal = CancelToken.source();
    config.cancelToken = requestSignal.token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    let prevRequest = error?.config;

    if (error.code === 401) {
      window.location.href = "/login";
    } else {
      // console.error("Error fetching data: ", error);
    }

    if (!error?.response) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
