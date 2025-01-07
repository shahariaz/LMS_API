import { NextFunction, Request, Response } from "express";
import { THttpErrorResponse } from "../types/type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (
  err: THttpErrorResponse,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  res.status(err.statusCode).json(err);
};
