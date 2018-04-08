
const initialState = {
  isLoading: false,
  data: null,
  updateSuccess: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.response,
      };
    case 'UNAUTHORIZED':
    case 'GET_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.response,
        data: null,
      };
    case 'UPDATE_USER_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.response,
        updateSuccess: true,
      };
    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        updateSuccess: null,
        error: action.error,
      };
    case 'RESET_UPDATE_USER':
      return {
        ...state,
        updateSuccess: null,
        error: null,
      };
    default:
      return state;
  }
};
