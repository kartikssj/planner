import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import sesssion from 'express-session';
import mysql from '../middlewares/mysql';
import auth from '../middlewares/auth';
import users from './users';
import tasks from './tasks';
import plan from './plan';
import login from './login';
import logout from './logout';
import status from './status';

const {env: {DATABASE_URI}} = process;

const router = express.Router();

router
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
    .use(mysql(DATABASE_URI || {
        connectionLimit : 10,
        host            : 'localhost',
        user            : 'root',
        password        : '',
        database        : 'planner'
    }))
    .use('/v1/users', users)
    .use('/v1/tasks', tasks)
    .use('/v1/plan', plan)
    .use('/v1/login', login)
    .use('/v1/logout', logout)
    .use('/v1/status', status);

export default router;
