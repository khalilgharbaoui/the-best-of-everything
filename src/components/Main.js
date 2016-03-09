
require('styles/App.scss');
import React from 'react';
import HeaderComponent from './HeaderComponent';
import { Link } from 'react-router';



//import MoviesListComponent from './MoviesListComponent';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {



  render(){
    return (
      <div className='index'><center>
        <HeaderComponent />
        <Link className='demo-pricing demo-pricing-1' to='/movies'>The Best Movies</Link><br />
        <br />
        <br />
        <Link className='demo-pricing demo-pricing-2' to='/music'>The Best Music</Link><br />
          <br />
          <br />
        <Link className='demo-pricing demo-pricing-2' to='/trailers'>The Trailers Music</Link><br />

          {/*<MoviesListComponent />*/}
          {this.props.children}
      </center></div>

    );
  }
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0


export default AppComponent;
