import React from 'react';
import './styles/App.css'
import Landing from './components/Landing'
import About from './components/About'
import FlippedWave from './components/FlippedWave'
import Project from './components/Projects'
import Contact from './components/Contact'
import Apply from './components/Apply'
/*
import Skills from './components/Skills'
*/
import Navbar from './components/Navbar'
import FlippedTop from './components/FlippedTop'
import RouteNotFound from './components/RouteNotFound'
 
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";
 
 
 
 
function App() {
 return (
   <>
 
{/*<FlippedTop></FlippedTop>*/}
 
<Router>
<Switch>

<Route exact path='/'>
<Navbar></Navbar>
<div className='sample' id='listen'>
<FlippedTop></FlippedTop>
<Landing></Landing>
<About id='about'></About>
<Project></Project>
{/*
<Skills></Skills>
*/}
<Contact></Contact>
<FlippedWave></FlippedWave>
</div>
</Route>
 
<Route exact path='/apply'>
<Apply></Apply>
</Route>
<Route path='*' component={RouteNotFound} />
</Switch>
</Router>
 
</>
 );
}
 
export default App;
 

