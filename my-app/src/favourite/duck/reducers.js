import types from "./types";

const INITIAL_STATE = {
  list: [],
};

const favouriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.item],
      };
    case types.DELETE_FAVOURITE:
      const list = state.list.filter((currency) => currency !== action.item);
      return { ...state, list: list };
    case types.RESET_FAVOURITE:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
export default favouriteReducer;
