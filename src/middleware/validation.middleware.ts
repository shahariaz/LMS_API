import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import httpError from "../utils/httpError";

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof Error) {
        return httpError(next, error, req, 400);
      }
      return httpError(next, new Error("Internal Server Error"), req, 500);
    }
  };
};
