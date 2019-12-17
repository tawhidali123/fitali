import React, {useState, useEffect} from 'react';

import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Routines from './components/Routines'
import Edit from './components/Edit'
import Exercise from './components/Exercise';
import Logout from './components/Logout'
import Startup from './components/Startup'

function App() {
  let [user, setUser] = useState({
    valid_routines: [],
  })

  let [routine, setRoutine] = useState({});

  let findSpecificRoutine = (routineObj) => {
    setRoutine(routineObj)
  }
  
  console.log(user)
  // console.log(localStorage.getItem('token'))

  useEffect(() => {
    if(localStorage.getItem('token')){
      fetch('http://localhost:3000/persist', {
        method: 'GET',
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      })
      .then(res => res.json())
      .then(resp => {
        setUser(resp.user)
      })

    }
  }, [])

  let clearStorage = () => {
    localStorage.clear()
    setUser({
      valid_routines: [],
    })
  }



  return (
    <div className="App">
    <Switch>
      <Route path="/" exact render={(routerProps) => <Startup routerProps={routerProps} /> }/>
      <Route path="/login" exact render={(routerProps) => <Login routerProps={routerProps} setUser={setUser}/> }/>
      <Route path="/register" render={(routerProps) => <Register routerProps={routerProps} setUser={setUser}/>}/>

      <Route path="/home" render={(routerProps) => <Home routerProps={routerProps} user={user}/>}/>
      <Route path="/routines" render={(routerProps) => <Routines routerProps={routerProps} user={user} findSpecificRoutine={findSpecificRoutine}/>}/>
      <Route path="/edit" render={(routerProps) => <Edit routerProps={routerProps} setUser={setUser} user={user}/>}/>
      <Route path="/exercise" render={(routerProps) => <Exercise routerProps={routerProps} user={user} routine={routine}/>}/>
      <Route path="/logout" render={(routerProps) => <Logout routerProps={routerProps} clearStorage={clearStorage} />}/>
    </Switch>
    </div>
  );
}

export default App;

