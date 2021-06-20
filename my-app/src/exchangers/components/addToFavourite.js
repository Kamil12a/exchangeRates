import store from "../../store";
export const addToFavourite = (event) => {
  if (localStorage.getItem("favourite") === null) {
    let favouriteExchanges = event.target.id;
    localStorage.setItem("favourite", favouriteExchanges);
    let indexOfExchanges = store
      .getState()
      .exchanges.list.indexOf(event.target.id);
    let valuesOfExchanges = store.getState().exchanges.values[indexOfExchanges];
    localStorage.setItem("values", valuesOfExchanges);
  } else if (
    !localStorage.getItem("favourite").split(",").includes(event.target.id)
  ) {
    let favouriteExchanges = localStorage.getItem("favourite")
      ? localStorage.getItem("favourite") + "," + event.target.id
      : event.target.id;
    favouriteExchanges = favouriteExchanges.split(",");
    favouriteExchanges = [...new Set(favouriteExchanges)];
    favouriteExchanges = favouriteExchanges.join();
    let indexOfExchanges = store
      .getState()
      .exchanges.list.indexOf(event.target.id);
    let valuesOfExchanges =
      localStorage.getItem("values") +
      "," +
      store.getState().exchanges.values[indexOfExchanges];
    localStorage.setItem("favourite", favouriteExchanges);
    localStorage.setItem("values", valuesOfExchanges);
  }
};
