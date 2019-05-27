import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link }  from 'react-router-dom';
import Login from './components/Login';
import './App.css';


class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul><li><Link to={'/'}>Login Form</Link></li></ul>
          <ul><li><Link to={'/create'}>Signup Form</Link></li></ul>
        </nav>
        <Switch>
          <Route path={'/'} exact component={Login}/>
        </Switch>
      </div>
    )
  }

}

export default withRouter(App);