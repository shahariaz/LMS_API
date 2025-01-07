import { Request } from "express";
import { THttpErrorResponse } from "../types/type";
import responseMessage from "../constant/responseMessage";
import { config } from "../config/config";
import { EApplicationEnvironment } from "../constant/EApplicationEnvironement";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (
  err: Error | unknown,
  req: Request,
  errorStatusCode: number = 500
): THttpErrorResponse => {
  const errorObj: THttpErrorResponse = {
    success: false,
    statusCode: errorStatusCode,
    request: {
      ip: req.ip || null,
      method: req.method,
      url: req.originalUrl,
    },
    message:
      err instanceof Error
        ? err.message || responseMessage.INTERNAL_SERVER_ERROR
        : responseMessage.INTERNAL_SERVER_ERROR,
    data: null,
    trace: err instanceof Error ? { error: err.stack } : null,
  };

  // Production Env check
  if (config.NODE_ENV === EApplicationEnvironment.PRODUCTION) {
    delete errorObj.request.ip;
    delete errorObj.trace;
  }

  return errorObj;
};
