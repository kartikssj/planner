

const initialState = {
  error: null,
  isLoading: null,
  days: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAN_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'GET_PLAN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        days: action.response,
      };
    case 'GET_PLAN_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
