import { useState, useEffect } from "react";
import { verifyUser } from "./services/users.js";
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
        <Route exact path="/sunscreens">
          <Sunscreens user={user}/>
        </Route>
        <Route exact path="/sunscreens/:id">
          <SunscreenDetails user={user}/>
        </Route>
        <Route path="/add-sunscreen">
          {user ? <AddSunscreen user={user}/> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/sunscreens/:id/edit">
          {user ? <EditSunscreen user={user}/> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
