import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from './components/AppBar'
import Home from './components/Home';
import Explore from './components/Explore';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserContextProvider from "./context/user";
import PrivateRoute from './components/PrivateRoute';
import PostForm from './components/PostForm';


function App() {
  
  return (
    <Router>
      <UserContextProvider>
        <AppBar />
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/post' component={PostForm} />
          <Route exact path='/explore' component={Explore} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
