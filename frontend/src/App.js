import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import DefaultPackageOne from './components/packages/DefaultPackageOne';
import SavedPackages from './components/packages/SavedPackages';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import DesignPage from './components/designs/DesignPage'

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
      <Navigation />
        <Switch>
          <Route path="/login" component={LandingPage} />
          <Route path="/package/1" component={DefaultPackageOne} />
          <Route path="/my-packages" component={SavedPackages} />
          <Route path="/design" component={DesignPage} />
          <ConnectedProtectedRoute component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
