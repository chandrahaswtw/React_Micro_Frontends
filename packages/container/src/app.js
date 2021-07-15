import React, { useEffect, useRef, useCallback } from "react";
import { mount as marketingMount } from "MarketingHost/showMarketing";

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return <div ref={ref}></div>;

};

export default App;
