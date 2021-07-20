import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "MarketingHost/showMarketing";
import Header from "./Header";
import { BrowserRouter, useHistory } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Marketing from "./components/marketing";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = (props) => {

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Marketing></Marketing>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
