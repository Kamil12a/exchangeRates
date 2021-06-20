import types from "./types";

const INITIAL_STATE={
    list:[]
};

const favouriteReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case types.ADD_FAVOURITE:
          return {
            ...state,
            list: [...state.list, action.item],
          };      
        default:
          return state;
      }
}
export default favouriteReducer;