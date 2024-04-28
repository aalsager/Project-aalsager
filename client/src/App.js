import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Navbar from "./components/navbar";
import Movies from "./pages/movies";

export default function App() {
  return (
    <Router>
        <Switch>
          <AuthRoute path="/signin">
            <SignIn />
          </AuthRoute>
          <AuthRoute path="/signup">
            <SignUp />
          </AuthRoute>
          <PrivateRoute path="/">
            <div>
            <Navbar />
            <Movies/>

            </div>
          </PrivateRoute>
          <PrivateRoute path="/deatils/:id">
            <div>
            <Navbar />
            <div>Movie</div>

            </div>
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

function PrivateRoute({path, children}) { 
  const loggedIn = localStorage.getItem('auth-token')
  return (
    <Route exact path={path}>
      {loggedIn ? children : <Redirect to="/signin" />}
    </Route>
  )
}

function AuthRoute({path, children}) { 
  const loggedIn = localStorage.getItem('auth-token')
  return (
    <Route exact path={path}>
      {loggedIn ? <Redirect to="/"/> : children}
    </Route>
  )
}
