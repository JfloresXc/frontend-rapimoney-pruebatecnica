import React from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import ClientDetail from '../pages/ClientDetail';
import NotFound from '../pages/NotFound';
// import { useAuth } from '../hooks/useAuth';

export default function Routes() {
  const setLocation = useLocation()[1];
  //   const { isLogged } = useAuth();

  return (
    <Switch>
      <Route path="/">
        {() => {
          return setLocation('login');
        }}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home}>
        {/* {isLogged ? <Home /> : <Redirect to="login" />} */}
      </Route>
      <Route path="/client/:options" component={ClientDetail} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/:rest*">
        <NotFound />
      </Route>
    </Switch>
  );
}
