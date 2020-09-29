import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     rest.needLogin === true
//       ? <Redirect to='/login' />
//       : <Component {...props} />
//   )} />
// )

const ProtectedRoute = ({
  component: Component,
  loggedIn,
  ...rest
}) => {
  if (loggedIn) {
    return (
      <Route {...rest}
        component={Component}
      />
    );
  }
  return (
    <Redirect to="/login" />
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth.id
  }
}


const ConnectedProtectedRoute = connect(mapStateToProps, null)(ProtectedRoute);

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LandingPage} />
          <ConnectedProtectedRoute component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
