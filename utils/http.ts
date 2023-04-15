import axios, { AxiosError, AxiosInstance } from "axios";
import { HttpStatusCode } from "../constant/httpStatusCode.enum";
import { toast } from "react-toastify";
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://backoffice.nodemy.vn/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Add a request interceptor
    this.instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const message: any =
          error?.response?.data?.error?.message || "Lỗi server";
        toast.error(message);
        return Promise.reject(error);
      }
    );
  }
}
const http = new Http().instance;
export default http;
