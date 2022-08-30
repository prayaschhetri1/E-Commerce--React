import * as types from "./actionType";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    default:
      return state;
  }
};
