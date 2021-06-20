import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCurrency } from "../duck/operations";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToFavourite } from "./addToFavourite";
const Exchangers = ({ exchange, getAllCurrency }) => {
  useEffect(() => {
    getAllCurrency();
    
  }, []);

  return (
    <>
      {exchange.list.map((currency,index) => {
        return (
          <Card key={currency} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{currency}</Card.Title>
              <Card.Title>{exchange.values[index]}</Card.Title>
              <Button id={currency} onClick={addToFavourite} variant="primary">
                Dodaj do ulubionych
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  exchange: state.exchanges,
  favourite: state.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCurrency: () => {
    dispatch(getAllCurrency());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exchangers);
