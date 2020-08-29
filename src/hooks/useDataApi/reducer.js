import {
  FETCHING,
  FETCHED,
  ERROR
} from './actions';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCHED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export default dataFetchReducer;