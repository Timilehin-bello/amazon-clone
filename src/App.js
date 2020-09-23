import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./component/Checkout/Checkout";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
