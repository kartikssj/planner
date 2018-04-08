import {combineReducers} from 'redux';
import tasks from './tasks';
import user from './user';
import status from './status';

export default combineReducers({tasks, user, status});
