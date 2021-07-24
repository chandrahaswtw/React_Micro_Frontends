import React, { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Marketing from "./components/marketing";
import Auth from "./components/auth";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authAction = (bool) => {
    setIsSignedIn(bool);
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        {isSignedIn ? (
          <>
            <Header isSignedIn={isSignedIn} authAction={authAction}></Header>
            <Marketing></Marketing>
          </>
        ) : (
          <Route to="/auth">
            <Auth authAction={authAction}></Auth>
          </Route>
        )}
        <Redirect to={isSignedIn ? "/" : "/auth/signin"}></Redirect>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
