import Nav from "./Nav";
import "../App.css";
import Container from "./Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Welcome"
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

function App() {
  return (
    <div className="App">
      <Container />
      <header className="App-header">
        <Router>
          <Nav />
          <Switch>
            <Route path="/welcome" exact components={Home} />
            <Route path="/addmovie" exact components={AddMovie} />
            <Route path="/movies" exact components={MovieList} />
          </Switch>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
