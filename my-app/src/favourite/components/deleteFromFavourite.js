import store from "../../store";

export const deleteFromFavourite = (event) => {
  let favouriteExchanges = localStorage.getItem("favourite");
  favouriteExchanges = favouriteExchanges.split(",");
  favouriteExchanges = favouriteExchanges.filter(
    (currency) => currency !== event.target.id
  );
  favouriteExchanges = [...new Set(favouriteExchanges)];
  favouriteExchanges = favouriteExchanges.join();
  localStorage.setItem("favourite", favouriteExchanges);
  store.dispatch({
    type: "DELETE_FAVOURITE",
    item: event.target.id,
  });
};
