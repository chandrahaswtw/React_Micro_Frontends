import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (node) => {
  ReactDOM.render(<App></App>, node);
};

if(process.env.NODE_ENV === "development"){
    let node = document.getElementById("root-marketing");
    node && mount(node);
}

export {mount};