import { AuthHttp } from "../../providers/api/http";
import { IRegisterData } from "../utils/types";

export const registerMutateFn = async (data: IRegisterData) => {
  const response = await AuthHttp.post("/register", data);

  return await response.data;
};
