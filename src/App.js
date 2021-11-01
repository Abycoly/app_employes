//APP COMPOSANT PARENT

import React from 'react';
//import React, { Component } from 'react';

//COMPOSANT ENFANT
import ListeEmp from './compoments/ListeEmp';
import Header from './compoments/Header';
import { Provider } from './context';
import AddEmploye from './compoments/AddEmploye';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './compoments/pages/About';
import ErrorUrl from './compoments/pages/errorUrl';

class App extends React.Component {
  render() {
    return (
      //provider est l'armoire qui aura comme value this.state(mabase) et contiendra tous les composants enfants
      <Provider>
        <Router>
          <div className="App h-100">
            <Header />
            <div className="container">
              {/* <AddEmploye /> */}
              {/*<ListeEmp />, */}
              <Switch>
                <Route exact path='/employe' component={ListeEmp} />
                <Route exact path='/' component={ListeEmp} />
                <Route exact path='/add' component={AddEmploye} />
                <Route exact path='/about' component={About} />
                <Route component={ErrorUrl} />
              </Switch>

            </div>
          </div>
        </Router>

      </Provider>

    );
  }

}

export default App;
