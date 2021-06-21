import types from "./types";

const INITIAL_STATE = {
  list: [],
  values: [],
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
    case types.DELETE_VALUES:
     
      return { ...state, values:[]};
    case types.RESET_FAVOURITE:
      return {
        ...state,
        list: [],
      };
    case types.ADD_VALUES:
      return {
        ...state,
        values: [...state.values, action.item],
      };
      case types.DELETE_VALUES:
        return {
          ...state,
          values: [action.item],
        };
    default:
      return state;
  }
};
export default favouriteReducer;
