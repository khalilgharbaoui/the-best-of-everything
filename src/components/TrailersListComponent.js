'use strict';

import React from 'react';
import $ from 'jquery';
import _ from 'lodash'


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
    $.getJSON('http://www.myapifilms.com/imdb/trailers?token=db30f2b3-b033-4b77-97a1-3cd0988c10f0',

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
          // let movieFrame = `${trailer.videoURL}/imdb/embed?autoplay=false&width=480`

          return(
<div>
          <div key={trailer.idIMDB}><p>{trailer.title}</p></div>
{/*<div>
  <p>
<iframe src={movieFrame} width='480' height='270' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' frameborder='no' scrolling='no'></iframe></p>

</div>

need to make echt trailer into a componen and load him trough props.... 1 trailer 1 page

*/}
</div>
        );
      })}


    </div>
  );
}
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0

export default TrailersListComponent;
