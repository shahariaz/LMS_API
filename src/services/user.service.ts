import { Model } from "mongoose";
import { IUser } from "../types/interface";
import httpError from "../utils/httpError";
class UserService {
  constructor(private User: Model<IUser>) {}
  async findByEmail(email: string) {
    try {
      const user = await this.User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error("Error finding user by email");
    }
  }
}

export default UserService;
