import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Main from "../../view/main/main"
import Login from '../login/login';
import Registration from '../registration/registration';
class MainRoute extends React.Component {
    render(){
        console.log("propsssssss",this);
  return (
      <Router>
    <div >
      <Main />
      <Switch>
    <Route path="/signIn" component={Login} />
    <Route path="/reg" component={Registration} />  
    <Redirect to="/signIn"  />
        </Switch>
    </div>
    
    </Router>
  );
}
}
export default MainRoute;