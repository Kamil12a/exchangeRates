import store from "../../store";

const fetchCurrency = async () => {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/tables/a/?format=json",
    {
      method: "GET",
    }
  );
  const json = await response.json();

  return json;
};

export const getAllCurrency = () => async (dispatch) => {
  const currency = await fetchCurrency();
  const currencies = currency[0].rates;

  currencies.map((element) => {
    store.dispatch({
      type: "ADD_EXCHANGES",
      item: [element.currency, element.mid],
    });
  });
};
