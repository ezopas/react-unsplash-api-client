import React, { Component } from 'react';
import Navigation from './components/navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import Grid from './components/grid';
import Home from './components/home';
//import Savedkey from './components/SavedKey';

class App extends Component {
  render() {
      return(
          <BrowserRouter>
              <div className="App">
                  <Navigation/>
                  <Route exact path='/' component={Home}/>
                  <Route path='/:key' component={Grid}/>
                  {/*<Savedkey/>*/}
              </div>

          </BrowserRouter>
      )
  }
}

export default App;
