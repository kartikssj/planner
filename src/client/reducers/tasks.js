
const initialState = {
  list: [],
  error: null,
  isLoading: false,
  addSuccess: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASKS_START':
    case 'GET_TASK_START':
    case 'ADD_TASK_START':
    case 'DELETE_TASK_START':
      return {
        ...state,
        isLoading: true,
        error: null,
        addSuccess: null,
      };
    case 'GET_TASKS_ERROR':
    case 'GET_TASK_ERROR':
    case 'ADD_TASK_ERROR':
    case 'DELETE_TASK_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_TASK_SUCCESS':
      const {list = []} = state;
      list.filter(task => task.id === action.response.id);
      list.push(action.response);
      return {
        ...state,
        isLoading: false,
        list: [...list],
      };
    case 'GET_TASKS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        list: action.response
      };
    case 'ADD_TASK_SUCCESS':
      state.list.push(action.response);
      return {
        ...state,
        isLoading: false,
        error: null,
        list: state.list,
        addSuccess: true,
      };
    case 'DELETE_TASK_SUCCESS':
      const deleted = action.response;
      return {
        ...state,
        isLoading: false,
        error: null,
        list: state.list.reduce((acc, cur) => {
            if (cur.id !== deleted.id) {
              acc.push(cur);
            }
            return acc;
          }, []),
      };
    default:
      return state;
  }
};
