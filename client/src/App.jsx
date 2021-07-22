import { useState, useEffect } from "react";
import { signUp, verifyUser } from "./services/users.js";
import * as api from "./services/sunscreens.js";
import { Route, Switch, Redirect } from "react-router-dom";
import AddSunscreen from "./screens/AddSunscreen/AddSunscreen"
import EditSunscreen from "./screens/EditSunscreen/EditSunscreen"
import SignIn from "./screens/SignIn/SignIn"
import SignOut from "./screens/SignOut/SignOut"
import SignUp from "./screens/SignUp/SignUp";
import Sunscreens from "./screens/Sunscreens/Sunscreens"
import SunscreenDetails from "./screens/SunscreenDetails/SunscreenDetails"
import Welcome from "./screens/Welcome/Welcome"
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
    // const fetchData = async () => {
    //   const sunscreens = await api.getAllSunscreens();
    //   console.log(sunscreens);
    // };
    // // fetchData();
    // const fetchOneSunscreen = async () => {
    //   const sunscreen = await api.getOneSunscreen("60f848499c8114b6eb43c591");
    //   console.log(sunscreen);
    // };
    // fetchOneSunscreen();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome user={user}/>
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser}/>
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser}/>
        </Route>
        <Route path="/sunscreens">
          <Sunscreens user={user}/>
        </Route>
        <Route path="/sunscreens/:id">
          <SunscreenDetails user={user}/>
        </Route>
        <Route path="/add-sunscreen">
          <AddSunscreen user={user}/>
          {/* redirect restrict */}
        </Route>
        <Route path="/sunscreens/:id/edit">
          <EditSunscreen user={user}/>
          {/* redirect restrict */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
