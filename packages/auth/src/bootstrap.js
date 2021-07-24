import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createBrowserHistory, createMemoryHistory } from "history";

const mount = (
  node,
  { isDevelopment, initialPath, onNavigate, authAction }
) => {
  const history = isDevelopment
    ? createBrowserHistory()
    : createMemoryHistory({
        initialEntries: [initialPath],
      });
  ReactDOM.render(<App history={history} authAction={authAction} />, node);

  history.listen(onNavigate);

  return {
    onNavigateParent: (location) => {
      const parentPath = location.pathname;
      const childPath = history.location.pathname;
      if (parentPath !== childPath) {
        history.push(parentPath);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const authDiv = document.getElementById("root-auth");
  authDiv && mount(authDiv, { isDevelopment: true });
}

export { mount };
