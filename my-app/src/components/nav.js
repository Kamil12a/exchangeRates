import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import store from "../store";
export function Navigation() {
  const resetCurrency = () => {
    store.dispatch({
      type: "RESET_EXCHANGES",
    });
  
  };
  const resetFavourite =()=>{
    store.dispatch({
      type: "RESET_FAVOURITE",
    });
  }
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>CurrencyChecker</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/home">
            {" "}
            <Button  onClick={resetFavourite} variant="outline-light">Strona główna</Button>
          </Link>
          <Link to="/favourite">
            <Button
              onClick={resetCurrency}
              style={{ marginLeft: "20px" }}
              variant="outline-light"
            >
              Ulubione
            </Button>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}
