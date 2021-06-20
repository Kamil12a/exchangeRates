import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllFavourite } from "../duck/operations";
import { deleteFromFavourite } from "./deleteFromFavourite";
import {deleteAllFavourite} from "./deleteAllFromFavourite"
const FavouriteExchanges = ({ favourite, getAllFavourite }) => {
  useEffect(() => {
    getAllFavourite();
  }, []);

  return (
    <>
      {favourite.list.map((currency) => {
        return (
          <Card key={currency} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{currency}</Card.Title>
              <Button
                id={currency}
                onClick={deleteFromFavourite}
                variant="primary"
              >
                Usuń z ulubionych
              </Button>
            </Card.Body>
          </Card>
        );
      })}
            <Button onClick={deleteAllFavourite} style={{position:"absolute",top:"60px",right:"10px"}}variant="secondary">Usuń z Wszystkie</Button>

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
