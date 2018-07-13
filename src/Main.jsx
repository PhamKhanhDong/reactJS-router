import React from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Topics from "./Topics.jsx";
import Account from "./Account.jsx";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

let redux = require("redux");
let username = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

let reducer = redux.combineReducers({username});
let store = redux.createStore(reducer);
store.dispatch({type: "LOGIN", username: "Khanh_DOng"});
console.log(store.getState());

export default class Main extends React.Component {

  render() {
    return(
      <Router history={Router.hashHistory}>
        <div>
          <div className="menu">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink exact to="/topics" activeClassName="active">Topics</NavLink>
              </li>
              <li>
                <NavLink exact to="/account" activeClassName="active">Account</NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/account" component={Account} />
          </div>
        </div>
      </Router>
    );
  }
}

