import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "MarketingHost/showMarketing";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <div ref={ref}></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
