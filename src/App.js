import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Jotto from './Jotto/Jotto';
import ClickCounter from './ClickCounter/ClickCounter';

import Navbar from './Navbar/Navbar';



class App extends Component {

  render() {
    return (
      <div data-test="component-app" className="container" >
        <Navbar />

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/clickcounter"><ClickCounter /></Route>
          <Route path="/jotto"><Jotto /></Route>
        </Switch>

      </div>
    )
  }
}

export default App

