// let's go!
import React from 'react';
import {render} from 'react-dom';

// import CSS
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/Photogrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

// import Raven from 'raven-js';
// import {sentry_url, logException} from './data/config'

// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'random',
//     userLevel: 'editor'
//   }
// }).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)



render(router, document.getElementById('root'));

