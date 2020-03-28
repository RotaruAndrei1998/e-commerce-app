import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';



function App() {

    const [currentUser, setCurrentUser] = useState({id: null});
    
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
      console.log(currentUser);
      return () => unsubscribe();
    }, [currentUser.id]);

    const signOut = () => setCurrentUser({id: null});

return <div>
    <Header currentUser={currentUser} signOut={signOut}/>
    <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
  </div>;
}

export default App;
