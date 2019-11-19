import React from 'react';
import './App.css';
import UserPage from "./view/user-page/user_page"
import MainRoute from "./components/router/router"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div >
    <Route path="/home" component={UserPage} />
    <Route path="/" component={MainRoute} />  
    </div>
    </Router>
  );
}

export default App;
