import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import logo from "../logo.svg";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/randomwhatever">
            <Home />
          </Route>
          <Route path="*">
            <h1>404: You done goofed</h1>
          </Route>
        </Switch> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>EAT A DICK</p>A whole bag of 'em.'
      </header>
    </div>
  );
}

export default App;
