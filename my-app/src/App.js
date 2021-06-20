import { MainExchanges } from "./views/MainExchanges";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {FavouriteExchanges} from "./views/FavouriteExchanges"
function App() {
  return (
    <Router>
      <Route path="/home" component={MainExchanges}/>
      <Route path="/" exact component={MainExchanges}/>
      <Route path="/favourite" component={FavouriteExchanges}/>
    </Router>
  );
}

export default App;
