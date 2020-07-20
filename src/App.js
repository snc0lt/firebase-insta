import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from './components/AppBar'
import Home from './components/Home';
import Explore from './components/Explore';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <Router>
     <AppBar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/explore' component={Explore} />
       <Route exact path='/signup' component={SignUp} />
       <Route exact path='/login' component={Login} />
     </Switch>
    </Router>
  );
}

export default App;
