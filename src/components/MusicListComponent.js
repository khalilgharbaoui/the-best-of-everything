'use strict';
import React from 'react';
import $ from 'jquery';
require('styles//MusicList.scss');




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
    $.getJSON(`https://api-v2.soundcloud.com/explore/Popular+Music?client_id=${clientId}`,

      function(response){

        component.setState({
          dump: response.tracks

        });

      });


    }



    componentDidMount(){
      this.loadData();

    }


    render() {
      return (
        <div className="musiclist-component">

          <h1> music</h1>
          {this.state.dump.map(function(track){
            let clientId = '9ce2a0cb7a18a511e6ac8cfbc877271e';

            return(



<div key={track.id}>
<span><a href={`${track.stream_url}?client_id=${clientId}`}><img src={track.artwork_url} /></a></span>
<h2><a href={`${track.stream_url}?client_id=${clientId}`}>{track.title}</a></h2>
<h3>Replays: {track.playback_count}*</h3>
<h3>Reposts: {track.reposts_count}*</h3>
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
