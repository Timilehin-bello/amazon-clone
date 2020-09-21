import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header  />
            <h1>CHECKOUT PAGE</h1>
          </Route>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <Home/>
            <h1>HOME PAGE</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
