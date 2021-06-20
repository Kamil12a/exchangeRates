export const addToFavourite = (event) => {
  let favouriteExchanges = localStorage.getItem("favourite")
    ? localStorage.getItem("favourite") + "," + event.target.id
    : event.target.id;
  favouriteExchanges = favouriteExchanges.split(",");
  favouriteExchanges = [...new Set(favouriteExchanges)];
  favouriteExchanges = favouriteExchanges.join();
  localStorage.setItem("favourite", favouriteExchanges);
};
