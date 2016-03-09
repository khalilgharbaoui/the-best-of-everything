'use strict';
import React from 'react';
import $ from 'jquery';
require('styles//MusicList.scss');
// var SC = require('soundcloud');





class MusicListComponent extends React.Component {

  constructor(){
    super();

    this.state = {
      dump: []
    }
  }






  loadData(){

    let clientId = '9ce2a0cb7a18a511e6ac8cfbc877271e';

    let component = this;
    $.ajax({
      url: `https://api.soundcloud.com/tracks?format=json&client_id=${clientId}`,
      dataType: 'jsonp',
      contentType: 'application/json',
      type: 'GET'

    })

      .done((response) => {
        component.setState({
          dump: response
        });
      });
    }



    componentDidMount(){
      this.loadData();


    }


    render() {
      return (
        <div className="musiclist-component">

          <h1>theBest Music List</h1>
          {this.state.dump.map(function(track){
            let clientId = '9ce2a0cb7a18a511e6ac8cfbc877271e';

            return(



              <div key={track.id}>
                <span>
                  <a href={`${track.stream_url}?client_id=${clientId}`}>
                    <img src={track.artwork_url} />
                  </a>
                </span>
                <h2>
                  <a href={`${track.stream_url}?client_id=${clientId}`}>
                    {track.title}
                  </a>
                </h2>
              </div>

            );
          })}




        </div>
      );
    }
  }

  MusicListComponent.displayName = 'MusicListComponent';

  // Uncomment properties you need
  // MusicListComponent.propTypes = {};
  // MusicListComponent.defaultProps = {};
  //?client_id=9ce2a0cb7a18a511e6ac8cfbc877271e

  export default MusicListComponent;
