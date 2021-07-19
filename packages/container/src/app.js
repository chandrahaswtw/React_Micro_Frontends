import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "MarketingHost/showMarketing";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <div ref={ref}></div>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
