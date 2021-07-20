import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "MarketingHost/showMarketing";
import { useHistory } from "react-router-dom";

const Marketing = (props) => {
  const ref = useRef(null);
  const containerHistory = useHistory();
  useEffect(() => {
    const {onNavigateParent} = marketingMount(ref.current, {
      onNavigate: (location) => {
        let currentLocation = containerHistory.location.pathname;
        let newMarketingLocation = location.pathname;
        if (currentLocation !== newMarketingLocation) {
            containerHistory.push(newMarketingLocation);
        }
      },
    });

    containerHistory.listen(onNavigateParent);
  }, []);

  return <div ref={ref}></div>;
};

export default Marketing;
