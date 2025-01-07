import { Request, Response, NextFunction } from "express";
export interface AsyncFunction {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}
