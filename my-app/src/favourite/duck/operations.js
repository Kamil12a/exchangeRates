import store from "../../store";

export const getAllFavourite = () => async (dispatch) => {
  if(localStorage.getItem("favourite")){
    let favourite = localStorage.getItem("favourite").split(",");
    favourite.map((currency) => {
      store.dispatch({
        type: "ADD_FAVOURITE",
        item: currency,
      });
    });
  }
 
};
