import { Request, Response, NextFunction } from "express";
import { Document, Types } from "mongoose";
export interface AsyncFunction {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatarUrl: {
    public_id: string;
    url: string;
  };
  role: "admin" | "teacher" | "student";
  isVerified: boolean;
  courses: Array<{ CourseId: Types.ObjectId }>;
}
