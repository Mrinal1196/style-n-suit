import React from 'react';
import {auth} from './firebase/firebase-utils';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from '../src/pages/homepage/homepage'
import ShopPage from './pages/shop/shop-component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up-component';
import Header from './components/header/header-component';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user); 
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className='App'>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
  }
}

export default App;
