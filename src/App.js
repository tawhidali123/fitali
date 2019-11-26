import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  let [user, setUser] = useState({})

  return (
    <div className="App">
    <Switch>
      <Route path="/login" render={(routerProps) => <Login/>}/>
      <Route path="/register" render={(routerProps) => <Register routerProps={routerProps} setUser={setUser}/>}/>
      <Route path="/home" render={(routerProps) => <Home routerProps={routerProps} user={user}/>}/>
    </Switch>
    </div>
  );
}

export default App;
