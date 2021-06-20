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

export default connect(mapStateToProps,mapDispatchToProps)(Exchangers);
