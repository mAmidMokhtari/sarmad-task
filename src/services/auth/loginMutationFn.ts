import { AuthHttp } from "../../providers/api/http";
import { ILoginData } from "../utils/types";

export const loginMutateFn = async (data: ILoginData) => {
  const response = await AuthHttp.post("/login", data);

  return await response.data;
};
