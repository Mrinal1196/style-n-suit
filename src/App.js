import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from '../src/pages/homepage/homepage'

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div className='App'>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
