import store from "../../store";

export const getAllFavourite = () => async (dispatch) => {
  let favourite = localStorage.getItem("favourite").split(",");
  console.log(favourite);
  favourite.map((currency) => {
    store.dispatch({
      type: "ADD_FAVOURITE",
      item: currency,
    });
  });
};
