import { IActivation, IUser } from "../types/interface";
import { createJwtToken } from "./createJwtToken";

export const createActivationToken = (user: IUser): IActivation => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = createJwtToken(user._id as string);
  return { token, activationCode };
};
