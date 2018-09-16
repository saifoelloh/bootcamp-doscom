import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faStroopwafel, faAmbulance} from '@fortawesome/free-solid-svg-icons';

import {Home, BootcampForm, EntryList} from './container/index.js';

library.add(fab, faStroopwafel, faAmbulance);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/api/" component={Home} exact />
          <Route path="/list/" component={EntryList} />
        </Switch>
      </div>
    );
  }
}

export default App;
