import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./components/UserDetails";
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
