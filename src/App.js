import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

import './App.css';

function App() {
  return <div>
    <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route path='/hats' component={(props)=> {console.log(props); return (<div>HATS PAGE</div>)}}/>
    <Route path='/topics/:topicId' component={()=><div>topic detail page</div>} />
    </Switch>
  </div>;
}

export default App;
