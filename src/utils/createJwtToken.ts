import jwt from "jsonwebtoken";

export const createJwtToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
};
