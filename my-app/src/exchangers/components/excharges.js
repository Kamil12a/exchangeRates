import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCurrency } from "../duck/operations";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Exchangers = ({ exchange, getAllCurrency }) => {
  useEffect(() => {
    getAllCurrency();
  }, []);
  return (
    <>
      {exchange.list.map((currency) => {
        return (
          <Card key={currency[0]} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{currency[0]}</Card.Title>
              <Card.Text>wartość: {currency[1]}</Card.Text>
              <Button variant="primary">Dodaj do ulubionych</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  exchange: state.exchanges,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCurrency: () => {
    dispatch(getAllCurrency());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exchangers);
