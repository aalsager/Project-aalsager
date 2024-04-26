import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/">
            <div>Movies</div>
          </PrivateRoute>
          <PrivateRoute path="/deatils/:id">
            <div>Movie</div>
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

function PrivateRoute({path, children}) { 
  const loggedIn = localStorage.getItem('isSignedIn')
  return (
    <Route exact path={path}>
      {loggedIn ? children : <Redirect to="/signin" />}
    </Route>
  )
}
