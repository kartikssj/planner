

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
    case 'UNAUTHORIZED':
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
