import { AuthResponse, RegisterPayload } from "../models";
import http from "../utils/http";

export const registerAccount = (body: RegisterPayload) =>
  http.post<AuthResponse>("api/auth/local/register", body);
