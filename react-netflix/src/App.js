import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import data from './movies.json';

function AppRouter () {
  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link class="home-button" to="/">Homepage</Link>
          </li>
          <li>
            <Link class="home-button" to="/showCard/">showCard</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/showCard/" component={showCard} />
    </div>
  </Router>
);
  }

function Index() {
    return (
      <div>
        <h2>Homepage</h2>
      </div>
    );
  }

function showCard() {
  return (
    <div>
      <div class="App-header">
        <h2>showCard</h2>
          <div class="card_container">
          { 
            data.movie.map(function(movie){
            return <h4 class="main-title">{movie.Title}</h4>
            
            ;
            })
          }
          </div>
      </div>
    </div>
  );
} 
 

export default AppRouter;