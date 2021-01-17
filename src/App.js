import React from "react"
import {Route, Switch, Redirect} from "react-router"
import Dashboard from './Dashboard'
import WelcomePage from './WelcomePage'
import {AnimatePresence} from 'framer-motion'

const App = () => {

  return (
      <AnimatePresence exitBeforeEnter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
    </AnimatePresence>
  );
};

export default App;
