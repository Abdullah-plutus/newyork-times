import cookieParser from "cookie-parser";
import express, { Application } from "express";
import helmet from "helmet";

const ExpressConfig = (): Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(helmet());
  app.use(cookieParser());

  return app;
};

export default ExpressConfig;
