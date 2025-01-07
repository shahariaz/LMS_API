import { Schema, model } from "mongoose";
import { IUser } from "../types/interface";
const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: (value: string) => emailRegexPattern.test(value),
        message: "Invalid email format.",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    avatarUrl: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    role: {
      type: String,
      enum: ["admin", "teacher", "student"],
      default: "student",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    courses: [{ CourseId: Schema.Types.ObjectId }],
  },
  { timestamps: true }
);
const User = model("User", userSchema);
export default User;
