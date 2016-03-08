'use strict';

import React from 'react';
import $ from 'jquery';


require('styles/TrailersList.scss');

class TrailersListComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      dump: []
    }
  }

  loadData(){

    let component = this;
    $.getJSON('http://www.myapifilms.com/imdb/trailers?token=db30f2b3-b033-4b77-97a1-3cd0988c10f0&format=json&trailers=2&page=10',

    function(response){

      component.setState({
        dump: response.data.trailers[0].trailers

      });

    });


  }



  componentDidMount(){
    this.loadData();

  }

render() {
    return (
      <div className='index'>

<h1> List of the best Trailers</h1>
        {this.state.dump.map(function(trailer){
          return(


          <div key={trailer.idIMDB}><p>{trailer.title}</p></div>


        );
      })}


    </div>
  );
}
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0

export default TrailersListComponent;
