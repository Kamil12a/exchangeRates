import types from "./types";

const INITIAL_STATE={
    list:[],
    values:[]
};

const exchangeReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case types.ADD_EXCHANGES:
          return {
            ...state,
            list: [...state.list, action.item],
          };
          case types.ADD_VALUES:
            return {
              ...state,
              values: [...state.values, action.item],
            };
        case types.RESET_EXCHANGES:
          return {
            ...state,
            list: [],
            values:[]
          };
        
        default:
          return state;
      }
}
export default exchangeReducer;