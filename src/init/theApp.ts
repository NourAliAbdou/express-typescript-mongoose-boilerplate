import express, { Express } from 'express';
const logger = require('morgan');
const cookieParser = require('cookie-parser');
export default (app: Express) => {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
