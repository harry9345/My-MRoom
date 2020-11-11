import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = lazy(() => import("./components/login/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const Recovering = lazy(() => import("./components/Recovering/Recover"));
const Password = lazy(() =>
  import("./components/Recovering/Password/Password")
);

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recovering" component={Recovering} />
          <Route path="/password" component={Password} />
        </Suspense>
      </Switch>
    </Router>
  );
}
