import React, { Suspense } from "react";
import { Route, Switch as Container } from "react-router-dom";
import Header from "../components/header";
import RouteArr from "./_base";

const Routes = () => {
  return (
    <Container>
      {RouteArr.map((item, i) => {
        const { route, Component, exact = true } = item || {};

        return (
          <Route key={i} path={route} exact={exact}>
            <Suspense fallback={() => <div>Loading...</div>}>
              <div>
                <Header />
              </div>
              <div>
                <Component />
              </div>
            </Suspense>
          </Route>
        );
      })}
    </Container>
  );
};

export default Routes;
