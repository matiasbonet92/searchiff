import React from 'react';
import './App.css';
import { Route , Link } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/Search Results'
import logo from './images/searchiffy-logo.png'

export default function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <Link to="/">
          <img alt="logo" className="logo" src={logo} />
        </Link>
      </div>
      <div className="App-content">
        <Route 
          component={Home}
          path='/' 
        />
        <Route 
          component={SearchResults}
          path='/search/:keyword' 
        />
      </div>
    </div>
  );
}
