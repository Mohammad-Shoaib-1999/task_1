import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList.js";
import UserDetails from "./components/UserDetails.js";
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={UserList} />
          <Route path={process.env.PUBLIC_URL + "/user/:userId"} component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
