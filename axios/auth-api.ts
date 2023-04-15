import { LoginPayload } from "../models";
import axiosClient from "./axios-client";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/auth/local", payload);
  },
  // logout() {
  //   return axiosClient.post("/logout");
  // },
  getProfile() {
    return axiosClient.get("/users/me");
  },
};
