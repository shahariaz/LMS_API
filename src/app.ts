import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/config";
import httpResponse from "./utils/httpResponse";
import path from "path";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import httpError from "./utils/httpError";
import responseMessage from "./constant/responseMessage";
const app: Application = express();

app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Credentials",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.static(path.join(__dirname, "../", "public")));

//Router
import userRoute from "./routes/user.route";

app.use("/api/v1", userRoute);

app.get("/self", (req: Request, res: Response, _: NextFunction) => {
  httpResponse(req, res, 200, "Welcome to LMS API!");
});
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const message = `Route ${req.originalUrl} not found`;
  httpResponse(req, res, 404, message);
});

// 404 Handler
app.use((req: Request, _: Response, next: NextFunction) => {
  try {
    throw new Error(responseMessage.NOT_FOUND("route"));
  } catch (err) {
    httpError(next, err, req, 404);
  }
});
// Global Error Handler
app.use(globalErrorHandler);

export default app;
