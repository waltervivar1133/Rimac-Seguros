import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";


// pages 

import { Login  } from '../pages/Login';
import { Plan  } from '../pages/Plan';
import { Thanks  } from '../pages/Thanks';



export const AppRouter = () => {
  return (
    <div>
      <Router>
      <div>
         <Switch>
            <Route
              path="/"
              component= { Login }
              exact
            />
            <Route
              path="/plan"
              component= { Plan }
              exact
            />
              <Route
              path="/thanks"
              component= { Thanks }
              exact
            />
            
         </Switch>
      </div>
    </Router>
    </div>
  )
}