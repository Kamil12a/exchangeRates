import React ,{useEffect}from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../../store";
import { getAllFavourite } from "../duck/operations";

const FavouriteExchanges = ({ favourite ,getAllFavourite}) => {
  useEffect(()=>{
    getAllFavourite()
  },[])

 
  return (
    <>
    {favourite.list.map((currency)=>{
        return <p key={currency}>{currency}</p>
    })}
    </>
  );
};

const mapStateToProps = (state) => ({
  exchange: state.exchanges,
  favourite:state.favourite
});
const mapDispatchToProps = (dispatch) => ({
  getAllFavourite: () => {
    dispatch(getAllFavourite());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FavouriteExchanges);