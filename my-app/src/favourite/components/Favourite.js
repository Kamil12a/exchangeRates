import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllFavourite } from "../duck/operations";
import { deleteFromFavourite } from "./deleteFromFavourite";
const FavouriteExchanges = ({ favourite ,getAllFavourite}) => {
  useEffect(() => {
    getAllFavourite();

  }, []);

  return (
    <>
      {favourite.list.map((currency) => {
       return <Card key={currency} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{currency}</Card.Title>
            <Button id={currency}  onClick={ deleteFromFavourite}variant="primary">
              Usuń z ulubionych
            </Button>
          </Card.Body>
        </Card>;
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  exchange: state.exchanges,
  favourite: state.favourite,
});
const mapDispatchToProps = (dispatch) => ({
  getAllFavourite: () => {
    dispatch(getAllFavourite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteExchanges);
