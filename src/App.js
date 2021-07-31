import './App.css';
import Header from './Header.js';
import React, { Component } from 'react';
import Recipes from './Recipes.js';
import RecipeDesc from './RecipeDesc.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//class data
class App extends Component {
  
  render(){ 
    return (
      <div className="App">
        
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>

              <Route path="/RecipeDesc/:id">
                  <Header/>
                  <RecipeDesc/>
              </Route>

              <Route path="/">
                  <Header/>
                  <Recipes/>
              </Route>
          </Switch>
          
        </Router>
        
      </div>
    );
  }
}

export default App;
