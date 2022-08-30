import * as types from "./actionType";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }
    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
