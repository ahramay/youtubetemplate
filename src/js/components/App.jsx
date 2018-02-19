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
  		selectedVideo: ''
  	}

  	this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
	}

	getVideos(query){

		const fixed = 'https://www.googleapis.com/youtube/v3/search'
		let url = fixed + '?part=snippet' + '&maxResults=5' 
		+'&q=' + query + '&key=' + YOUTUBE_KEY;
		
		axios.get(url).then(data => {
			this.setState({
				videoList: data.data.items,
				selectedVideo: data.data.items[0]
			})
		})
	}

	handleSelectedVideo(video){
		this.setState({selectedVideo: video})
	}

  render() {

  	let { selectedVideo, videoList } = this.state
    return (
      <div className="app">
        <Nav />
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
  	this.getVideos('javascript');
  }

};