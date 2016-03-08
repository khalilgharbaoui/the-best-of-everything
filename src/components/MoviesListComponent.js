'use strict';

import React from 'react';
import $ from 'jquery';


require('styles/MoviesList.scss');

class MoviesListComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      dump: []
    }
  }

  loadData(){

    let component = this;
    $.getJSON('http://api.themoviedb.org/3/movie/top_rated?api_key=455bb69c9403cef5e4cee26bf3c0b505',

    function(response){

      component.setState({
        dump: response.results

      });

    });


  }



  componentDidMount(){
    this.loadData();

  }


  render() {
    return (
      <div className='index'>

        <h1> List of the best movies</h1>
        {this.state.dump.map(function(movie){
            let starStyle = {
            width: `${movie.vote_average * 10.0}%`
          };
          let imageUrl = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
          return(


            <div key={movie.id}>

              <span>
                <img src={imageUrl} />
              </span>
              <span>
                <h2>
                  {movie.title}
                </h2>
              </span>

            <div className="star"><span style={starStyle} className="rating"></span></div>
            </div>


          );
        })}


      </div>
    );
  }
}
//455bb69c9403cef5e4cee26bf3c0b505


MoviesListComponent.displayName = 'MoviesListComponent';

// Uncomment properties you need
// MoviesListComponent.propTypes = {};
// MoviesListComponent.defaultProps = {};

export default MoviesListComponent;
