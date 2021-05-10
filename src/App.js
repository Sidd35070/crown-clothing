import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/homepage';
import Shop from './pages/shop.component';
import { Switch, Route, Redirect} from "react-router-dom";
import Header from './components/header/header.component';
import { SignInUp } from './pages/sign-in-up/sign-in-up.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.util';
import {connect} from 'react-redux';
import {setUsername} from './components/redux/actions/userAction'

class App extends Component {
  
   unsubs = null;
   componentDidMount(){
    const {setUsername} = this.props;
    this.unsubs = auth.onAuthStateChanged(async user => {
      
      if(user){
        const userRef = await createUserProfileDocument(user);
        // console.log(user.displayName)
        userRef.onSnapshot(snapshot => {
          // this.setState();
            // console.log(snapshot.displayName)
            setUsername({id: snapshot.id, ...snapshot.data()});;
        });
      }
      setUsername(user);
    })
   }
   componentWillUnmount(){
     console.log("component will unmount is called");
     this.unsubs();
   }

  render() { 
    
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} ></Route>
        <Route exact path="/shop" component={Shop} ></Route>
        <Route exact path="/signin"  render={()=> this.props.user ? (<Redirect to='/'/>) : (<SignInUp/>) }  ></Route>
      </Switch>
      </div>
    );
  }
}

const mapDispatch = dispatch =>({
  setUsername:tobesend =>{
    return (dispatch(setUsername(tobesend)));
  } 
});

const mapStateToProps = state =>{
  // console.log(state);
  return  ({
  user :state.user.displayName
});
}
export default connect (mapStateToProps, mapDispatch)(App);


