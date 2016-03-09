import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/Main';
import { Router, Route, browserHistory } from 'react-router';
//IndexRouteLink
import MoviesListComponent from './components/MoviesListComponent';
import MusicListComponent from './components/MusicListComponent';
import TrailersListComponent from './components/TrailersListComponent';


// Render the main component into the dom
//<Route path="/movies/:movieId" component={MoviesItemComponent}/>

//<Route path="*" component={PageNotFound}/>
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={AppComponent}>
      {/*<IndexRoute component={AppComponent} />*/}
      <Route path='/movies' component={MoviesListComponent}/>
      <Route path='/music' component={MusicListComponent}/>
      <Route path='/trailers' component={TrailersListComponent}/>

    </Route>
  </Router>
), document.getElementById('app'));
