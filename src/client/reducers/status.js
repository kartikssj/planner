

const initialState = {
  error: null,
  isLoading: null,
  loggedIn: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: null,
        loggedIn: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        loggedIn: true,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        error: action.error,
      };
    case 'UNAUTHORIZED':
      return {
        ...state,
        loggedIn: false,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};
