import React from 'react';
import Nav from './nav'
import VideoPlayer from './videoPlayer'
import VideoList from './videoList'

import axios from 'axios'
import { YOUTUBE_KEY } from '../config/youtubekey'

export default class App extends React.Component {
  
  constructor(){
  	super();
  	this.state = {
  		videoList: [],
  		selectedVideo: '',
      searchedVideo: '',
  	}

    this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
    // this.getSearchVideos = this.getSearchVideos.bind(this);
    this.cbGetVideos = this.cbGetVideos.bind(this);
    this.cbUpdateVideos = this.cbUpdateVideos.bind(this);

	}

	getVideos(query, cb){

		const fixed = 'https://www.googleapis.com/youtube/v3/search'
		let url = fixed + '?part=snippet' + '&maxResults=5' 
		+'&q=' + query + '&key=' + YOUTUBE_KEY;
		
		axios.get(url).then(cb)
	}

  cbGetVideos(data){
    this.setState({
      videoList: data.data.items,
      selectedVideo: data.data.items[0]
    })
  }

  cbUpdateVideos(data){
    this.setState({
      videoList: data.data.items,
    })
  }


  // getSearchVideos(query){
  //   this.setState({
  //     searchedVideo: query
  //   })
  //   this.getVideos(query);
  // }  

	handleSelectedVideo(video){
    this.setState({selectedVideo: video})
	}

  render() {
    let { selectedVideo, videoList, searchedVideo } = this.state
    console.log(this.state)
    return (
      <div className="app">
        <Nav 
          getVideos = {this.getVideos}
          cbUpdateVideos = {this.cbUpdateVideos}
        />
        <div className="col-md-8">
        	<VideoPlayer selectedVideo= { selectedVideo } />
        </div>

        <div className="col-md-4">
        	<VideoList 
        		videoList={videoList} 
        		handleSelectedVideo = {this.handleSelectedVideo}
        	/>
        </div>
      </div>
    )
  }

  componentDidMount(){
  	this.getVideos('javascript', this.cbGetVideos);
  }

};