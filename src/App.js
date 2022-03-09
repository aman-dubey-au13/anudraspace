import logo from './logo.svg';
import './App.css';
import React, { useEffect ,useState }  from 'react';
import Filter from './componet/Filter'
import Year from './componet/Year'
import Home from './componet/Home'
import { BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/dashboard">
              <Filter/>
          </Route>
          <Route exact path="/year">
              <Year/>
          </Route>
          <Route exact path="/status">
              <Year/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;