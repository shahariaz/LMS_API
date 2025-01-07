import { Request, Response, NextFunction } from "express";

class User {
  constructor(private readonly userService: User) {}
}
