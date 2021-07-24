import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App = ({ history, authAction }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin">
          <SignIn authAction={authAction}></SignIn>
        </Route>
        <Route path="/auth/signUp">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
