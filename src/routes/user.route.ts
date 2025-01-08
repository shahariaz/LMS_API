import express from "express";
import UserController from "../controllers/user.controller";
import UserService from "../services/user.service";
import { validate } from "../middlewares/validation.middleware";
import { registrationSchema } from "../validatior/registration.validator";
import User from "../models/user.model";

const router = express.Router();
const userService = new UserService(User);

const userController = new UserController(userService);

router.route("/user").post(validate(registrationSchema), userController.create);

export default router;
