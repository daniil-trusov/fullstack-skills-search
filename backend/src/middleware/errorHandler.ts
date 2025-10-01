import type { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.statusCode || err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error("ERROR:", err);
  console.error(`[${status}] ${message}`);

  res.status(status).json({ error: message });
}
