import * as types from "./actionType";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  cart: [],
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
    case types.ADD_DATA_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.CART_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.CART_DATA_SUCCESS: {
      return {
        ...state,
        cart: payload,
        isLoading: false,
      };
    }
    case types.CART_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.DELETE_CART_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_CART_DATA_SUCCESS: {
      const newdata = state.cart.filter((item) => {
        return item.id !== payload;
      });
      return {
        ...state,
        isLoading: false,
        cart: newdata,
      };
    }
    case types.DELETE_CART_DATA_FAILURE: {
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
