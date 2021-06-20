import store from "../../store";

export const deleteAllFavourite = (event) => {
  let confirm = window.confirm("are u sure?");
  if (confirm) {
    localStorage.removeItem("favourite");
    store.dispatch({
      type: "RESET_FAVOURITE",
    });
  }
};
