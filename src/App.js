import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MngBldgStn from './components/MngBldgStn';
import MngFood from './components/MngFood';

function App() {
  return (
    <Router>
      <Route component={Navigation} />
      <div className="mt110 mb50 flex justify-center">
        <div className="w-60">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/mngbldgstn" component={MngBldgStn}/>
            <Route exact path="/mngfood" component={MngFood} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
