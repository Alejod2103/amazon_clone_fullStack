import React from 'react'
import './App.css'
import Header from './componentes/Header.js'
import Home from './componentes/Home.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './componentes/Checkout'
import LogIn from './componentes/LogIn'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />



























      
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path='/login'>
            <LogIn />
          </Route>

          <Route path="/">
           <Home />
          </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
