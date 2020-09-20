import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <h1>CHECKOUT PAGE</h1>
            </Route>
            <Route path="/login">
              <h1>LOGIN PAGE</h1>
            </Route>
            <Route exact path="/">
              <h1>HOME PAGE</h1>
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
