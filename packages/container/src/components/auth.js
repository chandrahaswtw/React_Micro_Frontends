import React, { useRef, useEffect } from "react";
import { mount as authMount } from "AuthHost/showAuth";
import { useHistory } from "react-router-dom";

const Auth = ({authAction}) => {
  const ref = useRef(null);
  const authHistory = useHistory();
  const initialPath = "/auth/signin/";
  useEffect(() => {
    const { onNavigateParent } = authMount(ref.current, {
      initialPath,
      onNavigate: (location) => {
        const childPath = location.pathname;
        var parentPath = authHistory.location.pathname;
        if (parentPath !== childPath) {
          authHistory.push(childPath);
        }
      },
      authAction
    });
    authHistory.listen(onNavigateParent);
  });
  return <div ref={ref}></div>;
};

export default Auth;
