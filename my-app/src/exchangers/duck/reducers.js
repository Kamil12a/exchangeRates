import types from "./types";

const INITIAL_STATE={
    list:[]
};

const exchangeReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case types.ADD_EXCHANGES:
          return {
            ...state,
            list: [...state.list, action.item],
          };
        case types.RESET_EXCHANGES:
          return {
            ...state,
            list: [],
          };
        
        default:
          return state;
      }
}
export default exchangeReducer;