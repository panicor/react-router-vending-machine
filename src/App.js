import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import "./App.css";
import Twizzlers from "./Twizzlers";
import Crackers from "./Crackers";
import Soda from "./Soda";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/twizzlers">
          <Twizzlers />
        </Route>
        <Route exact path="/crackers">
          <Crackers />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
