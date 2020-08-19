import React from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import About from './components/About';
import FlippedWave from './components/FlippedWave';
import Project from './components/Projects';
import Contact from './components/Contact';
import Apply from './components/Apply';
import Sponsors from './components/Sponsors';
import Faq from './components/Faq';
/*
import Skills from './components/Skills'
*/
import Navbar from './components/Navbar';
import FlippedTop from './components/FlippedTop';
import { RouteNotFound } from './components/RouteNotFound';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ApplicationForm from './components/ApplicationForm';
import UnsupportedDevice from './components/UnsupportedDevice';
import Schedule from './components/Schedule';
import Delete from './components/Schedule';

function App() {
  return (
    <>
      {/*<FlippedTop></FlippedTop>*/}

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <div className="sample" id="listen">
              <FlippedTop></FlippedTop>
              <Landing></Landing>
              <About id="about"></About>
              <Project></Project>
              <Schedule></Schedule>
              <Sponsors></Sponsors>
              <Faq></Faq>
              <Contact></Contact>
              <FlippedWave></FlippedWave>
            </div>
            {/* <div className="unsupported-display">
              <UnsupportedDevice></UnsupportedDevice>
            </div> */}
          </Route>
          <Route path="/apply">
            <ApplicationForm></ApplicationForm>
          </Route>
          <Route exact path="/apply">
            <ApplicationForm></ApplicationForm>
          </Route>
          <Route component={RouteNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
