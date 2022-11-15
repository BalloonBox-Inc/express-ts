import express, { Request, Response, NextFunction } from 'express';
import { HTTPError } from './utils/interface';
import { normalizePort } from './utils/helpers';
import { badRequestError, notFoundError } from './utils/error';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

dotenv.config();

const port = normalizePort(process.env.PORT ?? '5000');

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req: Request, res: Response, next: NextFunction) {
  next(notFoundError());
});

// error handler
app.use(function (err: HTTPError, req: Request, res: Response) {
  res.status(err.status || 500).json(err.message);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
