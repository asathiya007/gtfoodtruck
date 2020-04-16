import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MngBldgStn from './components/MngBldgStn';
import MngFood from './components/MngFood';
import MngFoodTruck from './components/MngFoodTruck';
import FoodTruckSumm from './components/FoodTruckSumm';
import Explore from './components/Explore';
import CurrInfo from './components/CurrInfo';
import OrderHist from './components/OrderHist';

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
            <Route exact path="/mngft" component={MngFoodTruck} />
            <Route exact path="/ftsumm" component={FoodTruckSumm} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/currinfo" component={CurrInfo} />
            <Route exact path="/orderhist" component={OrderHist} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
