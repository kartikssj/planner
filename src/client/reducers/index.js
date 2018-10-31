import {combineReducers} from 'redux';
import tasks from './tasks';
import user from './user';
import status from './status';
import plan from './plan';

export default combineReducers({tasks, user, status, plan});
