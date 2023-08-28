// import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import "./App.css";
import Snack from "./Snack";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/twizzlers">
          <Snack name="twizzlers" />
        </Route>
        <Route exact path="/crackers">
          <Snack name="crackers" />
        </Route>
        <Route exact path="/soda">
          <Snack name="soda" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
