/* global process */
import http from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mysql from './middlewares/mysql';
import users from './routes/users';
import tasks from './routes/tasks';
import plan from './routes/plan';

http.createServer(
  express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser())
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
).listen(process.env.PORT || 3001);
