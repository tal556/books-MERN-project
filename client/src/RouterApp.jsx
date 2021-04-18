import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Books from "./pages/BooksList/BooksList";
import Header from "./components/header/Header";
import addBook from './pages/addBook/AddBook'

export default function RouterApp() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/books" component={withRouter(Books)} />
          <Route exact path="/add-book" component={withRouter(addBook)} />
        </Switch>
      </Router>
    </div>
  );
}
