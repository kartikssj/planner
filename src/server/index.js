
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import template from './template';
import apiRouter from './routes';

const {env: {PORT, BIND_IP}} = process;

console.log("DIR", __dirname);

express()
    .use(morgan('dev'))
    .use('/api', apiRouter)
    .use('/public', express.static(path.resolve(__dirname, '../../dist/public')))
    .get('/*', (req, res) => res.send(template()))
    .listen(PORT || 3000, BIND_IP || '0.0.0.0');
