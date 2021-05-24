import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from '../src/pages/homepage/homepage'
import ShopPage from './pages/shop/shop-component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up-component';
import Header from './components/header/header-component';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
