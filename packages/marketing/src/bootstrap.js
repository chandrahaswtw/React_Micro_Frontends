import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (node, { onNavigate, isDevelopment }) => {
  const history = isDevelopment
    ? createBrowserHistory()
    : createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history}></App>, node);

  return {
    onNavigateParent : (location)=>{
        let currentLocation = history.location.pathname;
        let newContainerLocation = location.pathname;
        if(currentLocation !== newContainerLocation){
           console.log(currentLocation, newContainerLocation);
           history.push(newContainerLocation);
        }
    }
  }
};

if (process.env.NODE_ENV === "development") {
  let node = document.getElementById("root-marketing");
  node && mount(node, { isDevelopment: true });
}

export { mount };
