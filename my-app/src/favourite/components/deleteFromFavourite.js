import store from "../../store";
import { getAllFavourite } from "../duck/operations";
export const deleteFromFavourite = (event) => {
  let confirm = window.confirm("are u sure?");
  if (confirm) {
    let index = store.getState().favourite.list.indexOf(event.target.id);

    let valueOfCurrencies = store.getState().favourite.values[index];
    let values= localStorage.getItem("values")
    values=values.split(",")
    let newValues=[];
    values.forEach((value)=>{
      if(parseInt(value)!==parseInt(valueOfCurrencies)){
        newValues.push(value)
      }
    })
    console.log(newValues.join(","))
    localStorage.setItem("values",newValues)
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
  }
};
