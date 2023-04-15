import { AuthResponse, LoginPayload, RegisterPayload } from "../models";
import http from "../utils/http";

const authApi = {
  registerAccount: (body: RegisterPayload) =>
    http.post<AuthResponse>("api/auth/local/register", body),
  login: (body: LoginPayload) =>
    http.post<AuthResponse>("api/auth/local", body),
  logout: () => http.post("/logout"),
};

export default authApi;
