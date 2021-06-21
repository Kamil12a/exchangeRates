import store from "../../store";

export const getAllFavourite = () => async (dispatch) => {
  if(localStorage.getItem("favourite")){
    let favourite = localStorage.getItem("favourite").split(",");
    let values =  localStorage.getItem("values").split(",")
  
    favourite.map((currency) => {
      store.dispatch({
        type: "ADD_FAVOURITE",
        item: currency,
      });
    });
    values.map((value) => {
      store.dispatch({
        type: "ADD_VALUES",
        item: value,
      });
    });
    
  }

};
