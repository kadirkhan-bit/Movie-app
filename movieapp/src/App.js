import "./App.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:imdbId/" component={MovieDetail} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
//6da7f66f
export default App;
