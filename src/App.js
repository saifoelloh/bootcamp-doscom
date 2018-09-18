import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarAlt,
  faCompass,
  faMap,
  faBusAlt,
  faAddressCard,
  faGlobe,
  faGlobeAsia,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {Home, BootcampForm, EntryList} from './container/index.js';

library.add(
  fab,
  faCalendarAlt,
  faCompass,
  faMap,
  faAddressCard,
  faBusAlt,
  faGlobe,
  faGlobeAsia,
  faEnvelope,
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/list/" component={EntryList} />
        </Switch>
      </div>
    );
  }
}

export default App;
