import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import httpError from "../utils/httpError";
import { StatusCodes } from "http-status-codes";

class UserController {
  constructor(private userService: UserService) {}
  create = catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const { name, email, password } = req.body;
      const isUserExist = await this.userService.findByEmail(email);
      if (isUserExist) {
        httpError(next, "User already exists", req, StatusCodes.BAD_REQUEST);
      }
    }
  );
}

export default UserController;
