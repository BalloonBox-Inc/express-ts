import { HTTPExceptionError } from './interface';

const createError = require('http-errors');

export const notFoundError: HTTPExceptionError = (message = 'Not Found') =>
  createError(404, message);

export const badRequestError: HTTPExceptionError = (message = 'Bad Request') =>
  createError(400, message);

export const unuthorizedError: HTTPExceptionError = (
  message = 'Unauthorized'
) => createError(401, message);

export const serverError: HTTPExceptionError = (message = 'Server Error') =>
  createError(500, message);
