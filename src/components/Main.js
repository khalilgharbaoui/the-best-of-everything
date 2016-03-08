require('normalize.css');
require('styles/App.scss');
import React from 'react';
import HeaderComponent from './HeaderComponent';
import { Link } from 'react-router';



//import MoviesListComponent from './MoviesListComponent';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {



  render(){
    return (
      <div className='index'>
        <HeaderComponent />
        <Link to='/movies'>The Best Movies</Link>
        <Link to='/music'>The Best Music</Link>
          {/*<MoviesListComponent />*/}
          {this.props.children}
      </div>

    );
  }
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0


export default AppComponent;
