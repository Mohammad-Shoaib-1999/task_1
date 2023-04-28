import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList.js";
import UserDetails from "./components/UserDetails.js";
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/user/:userId" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
