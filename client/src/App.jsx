import { useState, useEffect } from "react";
import { verifyUser } from "./services/users.js";
import * as api from "./services/sunscreens.js";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      console.log(user);
    };
    const fetchData = async () => {
      const sunscreens = await api.getAllSunscreens();
      console.log(sunscreens);
    };
    // fetchData();
    const fetchOneSunscreen = async () => {
      const sunscreen = await api.getOneSunscreen("60f848499c8114b6eb43c591");
      console.log(sunscreen);
    };
    fetchOneSunscreen();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          Welcome!
        </Route>
        <Route path="/sign-up">Sign up!</Route>
        <Route path="/sign-in">Sign in!</Route>
        <Route path="/sign-out">Sign out!</Route>
        <Route path="/sunscreens">Sunscreens!</Route>
        <Route path="/sunscreens/:id">Sunscreen details</Route>
        <Route path="/add-sunscreen">
          Add Sunscreen!
          {/* redirect restrict */}
        </Route>
        <Route path="/sunscreens/:id/edit">
          Edit Sunscreens!
          {/* redirect restrict */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
