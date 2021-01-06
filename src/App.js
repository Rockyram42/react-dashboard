import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./components/style.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Product from "./components/product";
import Account from "./components/account";
import Detail from "./components/detail";
import PageNoteFound from "./components/PageNoteFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/:id" component={Detail} />
          <Route path="*" component={PageNoteFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
