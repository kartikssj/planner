/* global process */
import {createServer} from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import sesssion from 'express-session';
import mysql from './middlewares/mysql';
import auth from './middlewares/auth';
import users from './routes/users';
import tasks from './routes/tasks';
import plan from './routes/plan';
import login from './routes/login';
import logout from './routes/logout';
import status from './routes/status';

const {env: {PORT = 3001}} = process;
const app = express();
createServer(
  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(sesssion({
      name: 'psid',
      secret: 'sheekret',
      cookie: {
        maxAge: 30*24*3600000
      }
    }))
    .use(auth)
    .use(mysql({
      connectionLimit : 10,
      host            : 'localhost',
      user            : 'root',
      password        : '',
      database        : 'planner'
    }))
    .use('/api/v1/users', users)
    .use('/api/v1/tasks', tasks)
    .use('/api/v1/plan', plan)
    .use('/api/v1/login', login)
    .use('/api/v1/logout', logout)
    .use('/api/v1/status', status)
).listen(PORT);
