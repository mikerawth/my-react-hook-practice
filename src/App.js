import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'

import UseStateComponent from './components/UseStateComponent'
import UseEffectComponet from './components/UseEffectComponent'



function App() {
  // Declare a new state variable, which we'll call "count"


  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route exact path="/use-state-component" component={UseStateComponent} />
        <Route exact path="/use-effect-component" component={UseEffectComponet} />
      </Switch>

    </div>
  );
}

export default App;