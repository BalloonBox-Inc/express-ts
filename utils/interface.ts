import { Request, Response, NextFunction } from 'express';

export type Port = string | number | undefined;

export type HTTPExceptionError = (message?: string) => HTTPError;

export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | NextFunction | Response;

export interface HTTPError {
  status: number;
  message?: string;
}
