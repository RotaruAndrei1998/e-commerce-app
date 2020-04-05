import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import './App.css';



const  App = ({setCurrentUser, currentUser}) => {

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged (async userAuth => {
        if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
          ...snapshot.data(),
        });
      });
      }});
      return () => unsubscribe();
    }, []);

    const signOut = () => setCurrentUser(null);

return <div>
    <Header currentUser={currentUser} signOut={signOut}/>
    <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
  </div>;
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
