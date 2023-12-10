import { http } from "../../providers/api/http";
import { ILoginData } from "../utils/types";

export const loginMutateFn = async (data: ILoginData): Promise<T> => {
  const response = http.post("/auth/login", data);
  if (!response.ok) {
    throw new Error("something went wrong!");
  }
  if (response.status === 200) {
    localStorage.setItem("token", response?.data.token);
  }
  return await response.data;
};
