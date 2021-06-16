import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Overview = React.lazy(() => import("./steeltrusses/overview"));

const SteelTrusses = () => {
  let { path } = useRouteMatch();

  return (
    <div className="index">
      <Switch>
        <Route path={`${path}`} component={Overview} />
      </Switch>
    </div>
  );
};

export default SteelTrusses;
