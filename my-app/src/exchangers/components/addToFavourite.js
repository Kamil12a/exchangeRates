export const addToFavourite = (event) => {
  let favouriteExchanges = localStorage.getItem("favourite")
    ? localStorage.getItem("favourite") + "," + event.target.id
    : event.target.id;
  localStorage.setItem("favourite", favouriteExchanges);
};
