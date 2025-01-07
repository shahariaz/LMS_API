import { Request, Response, NextFunction } from "express";
import { AsyncFunction } from "../types/interface";

const catchAsync = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export default catchAsync;
