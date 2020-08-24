import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Nav from './containers/Nav';
import Dev from './containers/Dev';
import Des from './containers/Des';
import Contact from './containers/Contact';
import DevProject from './components/DevProject';
import DesProject from './components/DesProject';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch />
        <Route path = '/developer/:id' component = { DevProject } />
        <Route path = '/designer/:id' component = { DesProject } />
        <Route path = '/developer' component = { Dev } />
        <Route path = '/designer' component = { Des } />
        <Route path = '/contact' component = { Contact } /> 
        <Route exact path = '/' component = { Home } />
      <Switch />
    </div>
  );
}

export default App;
