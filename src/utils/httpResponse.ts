import { Request, Response } from "express";
import { THttpResponse } from "../types/type";
import { config } from "../config/config";

export default (
  req: Request,
  res: Response,
  responseStatusCode: number,
  responseMessage: string,
  data: unknown = null
) => {
  const response: THttpResponse = {
    success: true,
    statusCode: responseStatusCode,
    request: {
      ip: req.ip,
      method: req.method,
      url: req.url,
    },
    message: responseMessage,
    data,
  };
  if (config.NODE_ENV === "PRODUCTION") {
    delete response.request.ip;
  }
  res.status(responseStatusCode).json(response);
};
