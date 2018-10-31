
import {fetchAction} from './util';

// tasks
export const getTasksAction = () => fetchAction('GET_TASKS', '/api/v1/tasks');
export const getTaskAction = (id) => fetchAction('GET_TASK', '/api/v1/tasks/'+id);
export const addTaskAction = (data) => fetchAction('ADD_TASK', '/api/v1/tasks', {method: 'POST', body: JSON.stringify(data)});
export const deleteTaskAction = (id) => fetchAction('DELETE_TASK', '/api/v1/tasks/'+id, {method: 'DELETE'});
export const doneTaskAction = (id) => fetchAction('DONE_TASK', '/api/v1/tasks/'+id+'/done', {method: 'POST'});

// users
export const getUserAction = () => fetchAction('GET_USER', '/api/v1/users/me');
export const updateUserAction = (data) => fetchAction('UPDATE_USER', '/api/v1/users/me', {method: 'POST', body: JSON.stringify(data)});
export const resetUpdateUserAction = () => ({type: 'RESET_UPDATE_USER'});

// login
export const loginAction = (data) => fetchAction('LOGIN', '/api/v1/login', {method: 'POST', body: JSON.stringify(data)});
export const logoutAction = () => fetchAction('LOGOUT', '/api/v1/logout', {method: 'POST'});

// plan
export const getPlanAction = () => fetchAction('GET_PLAN', '/api/v1/plan');

