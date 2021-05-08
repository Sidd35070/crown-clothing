import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/homepage';
import Shop from './pages/shop.component';
import { Switch, Route} from "react-router-dom";
import { Header } from './components/header/header.component';
import { SignInUp } from './pages/sign-in-up/sign-in-up.component';
import {auth} from './components/firebase/firebase.util'

class App extends Component {
  state = { 
    currentUser:null
   };
   unsubs = null;
   componentDidMount(){
    this.unsubs = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
   }
   componentWillUnmount(){
     this.unsubs();
   }

  render() { 
    
    return ( <div>
      <Header  user={this.state.currentUser}/>
      <Switch>
      <Route exact path="/" component={Homepage} ></Route>
      <Route exact path="/shop" component={Shop} ></Route>
      <Route exact path="/signin" component={SignInUp} ></Route>
    </Switch>
    </div> );
  }
}
 
export default App;


